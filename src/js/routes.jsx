import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history'; // eslint-disable-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'stores/configure-store';

import AppContainer from 'views/AppContainer';
import NotFoundPage from 'views/NotFoundPage';

import HomePage from 'views/home/HomePage';
import UsersContainer from 'views/users/UsersContainer';
import UserSection from 'views/users/UserSection';
import CountersPage from 'views/counters/CountersPage';
import RedditPage from 'views/reddit/RedditPage';

const store = configureStore();
const history = syncHistoryWithStore(useRouterHistory(createHistory)({
  basename: '/',
}), store);

export default function () {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={HomePage} />
          <Route path="/users" component={UsersContainer}>
            <Route path=":userId" component={UserSection} />
          </Route>
          <Route path="/counter" component={CountersPage} />
          <Route path="/reddit" component={RedditPage} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    </Provider>
  );
}
