// @flow

import React from 'react';
import { Link } from 'react-router';

type Props = {
  children: React$Element<any>,
};

export default function AppContainer(props: Props) {
  return (
    <div className="app-container">
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-supported-content"
            aria-controls="navbar-supported-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>
          <a className="navbar-brand" href="/">TripleByte</a>
          <div className="collapse navbar-collapse" id="navbar-supported-content">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reddits">Reddit</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <div className="container">
          {props.children}
        </div>
      </div>
    </div>
  );
}
