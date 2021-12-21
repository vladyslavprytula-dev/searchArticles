import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../routes';
import HomePage from '../views/HomePage';
import ArticleDetailsPage from '../views/ArticleDetailsPage';
import '../styles/base.scss';
const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.articleDetailsPage} component={ArticleDetailsPage} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </>
);
export default App;
