// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'views/not-found/NotFoundPage';

import HomePage from 'views/home/HomePage';
import UsersContainer from 'views/users/UsersContainer';
import CountersPage from 'views/counters/CountersPage';
import RedditsPage from 'views/reddits/RedditsPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/users" component={UsersContainer} />
      <Route path="/counter" component={CountersPage} />
      <Route path="/reddits" component={RedditsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
