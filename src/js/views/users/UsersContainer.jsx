// @flow

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';

type Props = {
  children: React$Element<any>,
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
    return (
      <DocumentTitle title="Users">
        <div>
          <h1>Users</h1>
          <div className="users-page">
            <ul>
              {this.state.users.map(user => (
                <li key={user.id}>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="users-detail">
            {this.props.children}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
