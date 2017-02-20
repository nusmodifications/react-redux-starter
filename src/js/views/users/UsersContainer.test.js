import React from 'react';
import { shallow } from 'enzyme';

import UsersContainer from './UsersContainer';

describe('UsersContainer', () => {
  it('renders users', () => {
    const wrapper = shallow(<UsersContainer><div/></UsersContainer>);
    const usersList = wrapper.find('ul > li');
    expect(usersList.length).toBe(2);
    expect(usersList.at(0).render().text()).toBe('John Doe');
    expect(usersList.at(1).render().text()).toBe('Mary Jane');
  });
});
