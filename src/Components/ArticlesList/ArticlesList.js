import { NavLink, withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Article from './Article/Article';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function ArticlesList({ articles, filterWords }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '45px',
        }}
      >
        {articles.map(article => (
          <Grid key={uuidv4()}>
            <NavLink
              to={{
                pathname: `/articles/${article.source.id}`,
                state: {
                  title: article.title,
                  content: article.content,
                  img: article.urlToImage,
                },
              }}
            >
              <Article
                date={article.publishedAt}
                img={article.urlToImage}
                title={article.title}
                description={article.description}
                filterWords={filterWords}
              />
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default withRouter(ArticlesList);
