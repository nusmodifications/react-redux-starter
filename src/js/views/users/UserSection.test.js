// @flow
import React from 'react';
import { shallow } from 'enzyme';

import UserSection from './UserSection';

describe('UserSection', () => {
  it('renders a user Id', () => {
    const userId = '1';
    const wrapper = shallow(<UserSection match={{ params: { userId }}}/>);
    expect(wrapper.text()).toBe(`User Id Selected: ${userId}`);
  });
});
