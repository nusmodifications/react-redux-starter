// @flow
import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders both logos', () => {
    const wrapper = shallow(<HomePage/>);
    expect(wrapper.find('.logo').at(0).prop('alt')).toBe('React Logo');
    expect(wrapper.find('.logo').at(1).prop('alt')).toBe('Redux Logo');
  });
});
