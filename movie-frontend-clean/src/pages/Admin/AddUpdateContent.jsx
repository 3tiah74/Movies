import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as moviesApi from '../../api/moviesApi'

const emptyForm = {
  title: '',
  year: '',
  description: '',
  director: '',
  genre: '',
  posterUrl: '',
}

export default function AddUpdateContent() {
  const { id: idParam } = useParams()
  const isNew = !idParam || idParam === 'new'
  const movieId = isNew ? null : Number(idParam)
  const editIdValid = !isNew && Number.isFinite(movieId)
  const navigate = useNavigate()

  const [form, setForm] = useState(emptyForm)
  const [loading, setLoading] = useState(editIdValid)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!editIdValid) {
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        const { data } = await moviesApi.getMovieById(movieId)
        if (cancelled) return
        setForm({
          title: data.title ?? '',
          year: String(data.year ?? data.releaseYear ?? ''),
          description: data.description ?? '',
          director: data.director ?? '',
          genre: data.genre ?? '',
          posterUrl: data.posterUrl ?? data.poster ?? '',
        })
      } catch {
        if (!cancelled) setError('Could not load movie.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [editIdValid, movieId])

  function updateField(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSaving(true)
    const payload = {
      title: form.title.trim(),
      description: form.description.trim() || undefined,
      director: form.director.trim() || undefined,
      genre: form.genre.trim() || undefined,
      posterUrl: form.posterUrl.trim() || undefined,
    }
    const y = form.year.trim()
    if (y) {
      const n = Number(y)
      if (Number.isFinite(n)) {
        payload.year = n
        payload.releaseYear = n
      }
    }
    try {
      if (isNew) {
        await moviesApi.createMovie(payload)
      } else {
        await moviesApi.updateMovie(movieId, payload)
      }
      navigate('/admin/content')
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Save failed.'
      setError(Array.isArray(msg) ? msg.join(' ') : String(msg))
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="page">
        <p className="muted">Loading…</p>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>{isNew ? 'Add movie' : 'Edit movie'}</h1>
        <Link to="/admin/content" className="btn btn--ghost">
          Back
        </Link>
      </div>
      <form className="form form--narrow" onSubmit={handleSubmit}>
        {error && <p className="form__error">{error}</p>}
        <label className="form__field">
          <span>Title</span>
          <input value={form.title} onChange={updateField('title')} required />
        </label>
        <label className="form__field">
          <span>Year</span>
          <input value={form.year} onChange={updateField('year')} inputMode="numeric" />
        </label>
        <label className="form__field">
          <span>Director</span>
          <input value={form.director} onChange={updateField('director')} />
        </label>
        <label className="form__field">
          <span>Genre</span>
          <input value={form.genre} onChange={updateField('genre')} />
        </label>
        <label className="form__field">
          <span>Poster URL</span>
          <input
            type="url"
            value={form.posterUrl}
            onChange={updateField('posterUrl')}
            placeholder="https://…"
          />
        </label>
        <label className="form__field">
          <span>Description</span>
          <textarea value={form.description} onChange={updateField('description')} rows={5} />
        </label>
        <button type="submit" className="btn btn--primary" disabled={saving}>
          {saving ? 'Saving…' : 'Save'}
        </button>
      </form>
    </div>
  )
}
