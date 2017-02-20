import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import ConnectedCountersPage, { CountersPage } from 'views/counters/CountersPage';

const mockStore = configureStore();

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

  it('should pass the props to the connected component', () => {
    const defaultCounter = 42;
    const store = mockStore({
      counter: defaultCounter,
    });
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedCountersPage/>
      </Provider>
    );
    expect(wrapper.find('CountersPage').props().counter).toEqual(defaultCounter);
  });
});
