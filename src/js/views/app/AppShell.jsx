// @flow

import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Routes from 'views/Routes';

function AppShell() {
  return (
    <div className="app-container">
      <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-supported-content"
            aria-controls="navbar-supported-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/">React Redux Starter</a>
          <div className="collapse navbar-collapse" id="navbar-supported-content">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/counter">Counter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reddits">Reddit</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes />
      </div>
    </div>
  );
}

export default withRouter(AppShell);
