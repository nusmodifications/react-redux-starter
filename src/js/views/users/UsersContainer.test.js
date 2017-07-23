// @flow
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import UsersContainer from './UsersContainer';

describe('UsersContainer', () => {
  it('renders users', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UsersContainer match={{ url: '/users' }} />
      </MemoryRouter>
    );
    const usersList = wrapper.find('ul > li');
    expect(usersList.length).toBe(2);
    expect(usersList.at(0).render().text()).toBe('John Doe');
    expect(usersList.at(1).render().text()).toBe('Mary Jane');
  });
});
