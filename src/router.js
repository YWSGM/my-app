import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TestSearch from './routes/testSearch';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" exact component={TestSearch} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
