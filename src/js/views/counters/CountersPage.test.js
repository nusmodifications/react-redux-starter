import React from 'react';
import { shallow } from 'enzyme';

import { CountersPage } from 'views/counters/CountersPage';

describe('CountersPage', () => {
  it('renders the counter', () => {
    const counter = 42;
    const increment = jest.fn();
    const decrement = jest.fn();

    const countersPage = shallow(
      <CountersPage counter={counter}
        increment={increment}
        decrement={decrement}
      />
    );

    expect(countersPage.find('.counter-value').text()).toEqual(counter.toString());

    countersPage.find('.btn-increment').simulate('click');
    expect(increment).toHaveBeenCalledTimes(1);

    countersPage.find('.btn-decrement').simulate('click');
    expect(decrement).toHaveBeenCalledTimes(1);
  });
});
