import React from 'react';
import { shallow } from 'enzyme';

import UserSection from './UserSection';

describe('UserSection', () => {
  it('renders a user Id', () => {
    const userId = '1';
    const userSection = shallow(<UserSection params={{ userId }}/>);
    expect(userSection.text()).toBe(`User Id Selected: ${userId}`);
  });
});
