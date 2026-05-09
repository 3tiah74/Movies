import React, { useEffect, useState } from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import '../../styles/AdminDashboard.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { addCategory, deleteCategory, getCategories } from '../../api/categoriesApi'

const ManageCategories = () => {
  const [categories, setCategories] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true)
        const data = await getCategories()
        setCategories(Array.isArray(data) ? data : [])
      } catch {
        setCategories([])
      } finally {
        setLoading(false)
      }
    }

    loadCategories()
  }, [])

  const handleAddCategory = async (e) => {
    e.preventDefault()
    try {
      await addCategory({ name })
      setMessage('Category added.')
    } catch (err) {
      setMessage(err?.message || 'Adding category is not supported by backend.')
    }
  }

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId)
      setCategories((prev) => prev.filter((c) => c.categoryId !== categoryId))
    } catch (err) {
      setMessage(err?.message || 'Deleting category is not supported by backend.')
    }
  }

  return (
    <>
      <AdminLayout>
        <div className='bg-dark' style={{ paddingBottom: '50px', minHeight: '100vh' }}>
          <Container className='pt-4'>
            <Row>
              <h1 className='text-white mb-4'>Manage Categories</h1>
              <Col lg={6} md={10} xs={12}>
                <Form className='d-flex gap-3 align-items-stretch w-100 mb-4' onSubmit={handleAddCategory}>
                  <Form.Group className="flex-grow-1" controlId="formCategoryName">
                    <Form.Control
                      placeholder='New Category Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='control'
                    />
                  </Form.Group>
                  <Button variant="danger" type="submit" className='px-5 fw-bold'>
                    Add Category
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row className='pt-3 g-3'>
              <h3 className='text-white mb-4'>Existing Categories</h3>
              {loading && <p className='text-secondary'>Loading categories...</p>}
              {!loading && categories.length === 0 && (
                <p className='text-secondary'>No categories found.</p>
              )}
              {categories.map((category) => (
                <Col lg={3} md={4} xs={6} key={category.categoryId}>
                  <div className='border border-secondary rounded p-3 d-flex justify-content-between align-items-center bg-black'>
                    <span className='text-white fw-bold'>{category.name}</span>
                    <i className="bi bi-trash text-danger fs-5" onClick={() => handleDeleteCategory(category.categoryId)} style={{ cursor: 'pointer' }} title='Delete Category'></i>
                  </div>
                </Col>
              ))}
              {message && <p className='text-warning mt-3'>{message}</p>}
            </Row>
          </Container >
        </div >
      </AdminLayout >
    </>
  )
}

export default ManageCategories