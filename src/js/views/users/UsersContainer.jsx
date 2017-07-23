// @flow

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link, Route } from 'react-router-dom';
import UserSection from 'views/users/UserSection';

type Props = {
  match: Object,
};

type State = { users: Array<{ name: string, id: number }>};

export default class UsersContainer extends Component {
  state: State;
  props: Props;

  static defaultProps = {
    children: null,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'John Doe',
          id: 1,
        },
        {
          name: 'Mary Jane',
          id: 2,
        },
      ],
    };
  }

  render() {
    const { match } = this.props;
    return (
      <DocumentTitle title="Users">
        <div>
          <h1>Users</h1>
          <div className="users-page">
            <ul>
              {this.state.users.map(user => (
                <li key={user.id}>
                  <Link to={`${match.url}/${user.id}`}>{user.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="users-detail">
            <Route path={`${match.url}/:userId`}
              component={UserSection}
            />
            <Route exact
              path={match.url}
              render={() => (
                <p>Please select a user.</p>
              )}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
