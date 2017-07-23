// @flow
import React from 'react';
import DocumentTitle from 'react-document-title';

import reactLogoPath from 'img/react-logo.svg';
import reduxLogoPath from 'img/redux-logo.svg';

const HomePage = () => (
  <DocumentTitle title="React Redux Starter">
    <div>
      <h1>React Redux Starter</h1>
      <hr />
      <div>
        <img src={reactLogoPath} alt="React Logo" className="logo" />
        <img src={reduxLogoPath} alt="Redux Logo" className="logo" />
      </div>
    </div>
  </DocumentTitle>
);

export default HomePage;
