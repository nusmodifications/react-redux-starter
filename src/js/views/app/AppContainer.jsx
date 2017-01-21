import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function AppContainer(props) {
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
            <span className="navbar-toggler-icon"/>
          </button>
          <a className="navbar-brand" href="/">React Redux Starter</a>
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
                <Link className="nav-link" to="/reddit">Reddit</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        {props.children}
      </div>
    </div>
  );
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
