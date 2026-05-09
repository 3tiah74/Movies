import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Spinner, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { getCategories } from "../../api/categoriesApi";
import { getContent, getContentByCategory } from "../../api/contentApi";
import MovieCard from "../../components/componentsUser/MovieCard";

function Category() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryMovies, setCategoryMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const [categoryData, allMovies] = await Promise.all([
          getCategories(),
          getContent()
        ]);
        
        const mapped = (Array.isArray(categoryData) ? categoryData : []).map(cat => ({
          id: cat.categoryId,
          name: cat.name,
          count: allMovies.filter(m => m.categories?.some(c => c.categoryId === cat.categoryId)).length
        }));
        setCategories(mapped);
      } catch (err) {
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    
    const loadCategoryMovies = async () => {
      try {
        setMoviesLoading(true);
        const data = await getContentByCategory(selectedCategory.id);
        setCategoryMovies(Array.isArray(data) ? data : []);
      } catch (err) {
        // handle error
      } finally {
        setMoviesLoading(false);
      }
    };
    loadCategoryMovies();
  }, [selectedCategory]);



  return (

    <div className="category-page py-5">
      <Container>
        {!selectedCategory ? (
          <>
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h2 className="text-white fw-bold m-0 ps-3">Movie Categories</h2>
                <span className="text-secondary">{categories.length} Categories Found</span>
            </div>

            {error && <div className="alert alert-danger bg-dark text-danger border-danger">{error}</div>}

            <Row className="g-4">
              {loading ? (
                <Col className="text-center py-5">
                    <Spinner animation="border" variant="danger" />
                </Col>
              ) : categories.length === 0 ? (
                <Col className="text-center py-5">
                    <h4 className="text-secondary">No categories found.</h4>
                </Col>
              ) : (
                categories.map((cat) => (
                  <Col key={cat.id} lg={3} md={4} sm={6} xs={6}>
                    <Card 
                        className="bg-dark text-white border-0 category-card h-100"
                        onClick={() => setSelectedCategory(cat)}
                    >
                      <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center py-4">
                        <h5 className="mb-2 fw-bold">{cat.name}</h5>
                        <Badge bg="danger" className="px-3 py-2 rounded-pill">
                          {cat.count} Movies
                        </Badge>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </>
        ) : (
          <>
            <div className="d-flex align-items-center gap-3 mb-5">
                <Button variant="outline-light" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }} onClick={() => setSelectedCategory(null)}>
                    <FaArrowLeft />
                </Button>
                <div>
                    <h2 className="text-white fw-bold m-0">{selectedCategory.name}</h2>
                    <span className="text-secondary">Showing {categoryMovies.length} movies in this category</span>
                </div>
            </div>

            <Row className="g-4">
                {moviesLoading ? (
                    <Col className="text-center py-5">
                        <Spinner animation="border" variant="danger" />
                    </Col>
                ) : categoryMovies.length === 0 ? (
                    <Col className="text-center py-5">
                        <h4 className="text-secondary">No movies found in this category.</h4>
                    </Col>
                ) : (
                    categoryMovies.map((movie) => (
                        <Col key={movie.movieId || movie.content_id} lg={3} md={4} sm={6} xs={6}>
                            <MovieCard movie={movie} />
                        </Col>
                    ))
                )}
            </Row>

          </>
        )}
      </Container>

      <style>{`
        .category-page {
          background: #000;
          min-height: 100vh;
        }

        .category-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border-radius: 20px;
          border: 1px solid #1a1a1a !important;
        }

        .category-card:hover {
          transform: translateY(-10px);
          background: #111 !important;
          border-color: #e50914 !important;
          box-shadow: 0 10px 30px rgba(229, 9, 20, 0.15);
        }
      `}</style>
    </div>
  );
}

export default Category;
