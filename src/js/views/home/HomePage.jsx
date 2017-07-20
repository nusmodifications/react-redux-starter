// @flow
import React, { Component } from 'react';
import autobind from 'react-autobind';

import reactLogoPath from 'img/react-logo.svg';
import reduxLogoPath from 'img/redux-logo.svg';
import MyComponent from '../MyComponent.jsx';

type Props = {};

class HomePage extends Component {
  constructor(props: Props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <div>
        <h1>React Redux Starter</h1>
        <hr/>
        <div>
          <img src={reactLogoPath} alt="React Logo" className="logo"/>
          <img src={reduxLogoPath} alt="Redux Logo" className="logo"/>
        </div>
      </div>
    );
  }
}

export default HomePage;
