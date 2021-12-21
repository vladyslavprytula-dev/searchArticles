import { useState, useRef, useEffect } from 'react';
import Container from '@mui/material/Container';
import Seacrchbar from '../Components/Searchbar/Searchbar';
import Filter from '../Components/Filter/Filter';
import ArticleList from '../Components/ArticlesList/ArticlesList';
import articlesApi from '../services/articles-api';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [areArticlesOver, setAreArticlesOver] = useState(false);
  const [filter, setFilter] = useState('');
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetchArticles();
    localStorage.setItem('query', searchQuery);
  }, [searchQuery]);
  useEffect(() => {
    const getQuery = localStorage.getItem('query');
    if (getQuery) {
      setSearchQuery(getQuery);
    }
  }, []);

  const formSubmit = data => {
    if (data !== searchQuery) {
      setSearchQuery(data);
      setCurrentPage(1);
      setArticles([]);
      setError(null);
    }
  };
  const filterSubmit = data => {
    setFilter(data);
  };
  const clickLoadMoreButton = () => {
    fetchArticles();
  };
  const shouldRenderLoadMoreBtn = (page, totalResults) => {
    const articlesLeft = totalResults - page * 6;
    setAreArticlesOver(articlesLeft <= 0);
  };
  const fetchArticles = () => {
    setIsLoading(true);
    articlesApi
      .fetchArticles(searchQuery, currentPage)
      .then(({ articles, totalResults }) => {
        shouldRenderLoadMoreBtn(currentPage, totalResults);
        setArticles(prevState => [...prevState, ...articles]);
        setCurrentPage(prevState => prevState + 1);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };
  const shouldRenderLoadMoreButton = !areArticlesOver && !isLoading && articles.length > 0;
  return (
    <Container maxWidth="xl" sx={{ width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <Seacrchbar onSubmit={formSubmit} />
      <Filter onSubmit={filterSubmit} />
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          mt: '40px',
          mb: '50px',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '20px',
        }}
      >
        Results: {articles.length}
      </Typography>
      <ArticleList articles={articles} onClick={null} filterWords={filter} />
      {shouldRenderLoadMoreButton && (
        <Button
          onClick={clickLoadMoreButton}
          variant="outlined"
          sx={{
            mt: '15px',
            ml: 'auto',
            mr: 'auto',
            mb: '15px',
            width: '150px',
          }}
        >
          Load more
        </Button>
      )}
    </Container>
  );
}
