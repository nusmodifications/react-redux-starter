// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { mapStateToProps, CountersPage } from 'views/counters/CountersPage';

describe('CountersPage', () => {
  it('renders the counter', () => {
    const counter = 42;
    const increment = jest.fn();
    const decrement = jest.fn();

    const wrapper = shallow(
      <CountersPage counter={counter}
        increment={increment}
        decrement={decrement}
      />
    );

    expect(wrapper.find('.counter-value').text()).toEqual(counter.toString());

    wrapper.find('.btn-increment').simulate('click');
    expect(increment).toHaveBeenCalledTimes(1);

    wrapper.find('.btn-decrement').simulate('click');
    expect(decrement).toHaveBeenCalledTimes(1);
  });

  it('should convert store state to props', () => {
    const defaultCounter = 42;
    const store = {
      counter: defaultCounter,
    };
    const props = mapStateToProps(store);
    expect(props).toEqual({
      counter: defaultCounter,
    });
  });
});
