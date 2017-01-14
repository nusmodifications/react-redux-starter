import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import AppContainer from 'views/AppContainer';

describe('AppContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppContainer/>, div);
  });

  it('renders all the navigation items', () => {
    const appContainer = shallow(<AppContainer/>);
    expect(appContainer.find('.nav-link').length).toBe(4);
    expect(appContainer.find('.nav-link').at(0).render().text()).toBe('Home');
    expect(appContainer.find('.nav-link').at(1).render().text()).toBe('Users');
    expect(appContainer.find('.nav-link').at(2).render().text()).toBe('Counter');
    expect(appContainer.find('.nav-link').at(3).render().text()).toBe('Reddit');
  });
});
