// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

import AppShell from './AppShell';

describe('AppShell', () => {
  it('renders all the navigation items', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AppShell />
      </MemoryRouter>
    );
    const navLinks = wrapper.find('.nav-link');
    expect(navLinks.length).toBe(4);
    expect(navLinks.at(0).render().text()).toBe('Home');
    expect(navLinks.at(1).render().text()).toBe('Users');
    expect(navLinks.at(2).render().text()).toBe('Counter');
    expect(navLinks.at(3).render().text()).toBe('Reddit');
  });
});
