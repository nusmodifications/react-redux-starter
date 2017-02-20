import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import mockReddits from 'mocks/reddits.json';
import ConnectedRedditsPage, { RedditsPage } from './RedditsPage';

const mockStore = configureStore();

describe('RedditsPage', () => {
  it('should render self and subcomponents', () => {
    const mockSearch = jest.fn();
    const wrapper = mount(
      <RedditsPage items={mockReddits.data.children}
        fetchReddits={mockSearch}
        fetchRedditsRequest={{
          isPending: false,
          isFailure: false,
          isSuccessful: true,
        }}
      />
    );
    expect(wrapper.find('.reddits-page').length).toBe(1);
    expect(wrapper.find('ul li').length).toBe(mockReddits.data.children.length);
    expect(wrapper.find('input').prop('value')).toBe('reactjs');
    expect(mockSearch).toBeCalledWith('reactjs');
  });

  it('should allow editing of the input and searching', () => {
    const mockSearch = jest.fn();
    const wrapper = mount(
      <RedditsPage fetchReddits={mockSearch} fetchRedditsRequest={{}}/>
    );
    const input = wrapper.find('input');
    expect(input.prop('value')).toBe('reactjs');
    input.simulate('change', { target: { value: 'redux' }});
    expect(input.prop('value')).toBe('redux');
    wrapper.find('form').simulate('submit');
    expect(mockSearch).toHaveBeenLastCalledWith('redux');
  });

  it('should pass the props to the connected component', () => {
    const fetchRedditsRequest = {
      isPending: false,
      isFailure: false,
      isSuccessful: true,
    };
    const store = mockStore({
      reddits: mockReddits.data.children,
      requests: {
        fetchRedditsRequest,
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedRedditsPage/>
      </Provider>
    );
    expect(wrapper.find('RedditsPage').props().items).toEqual(mockReddits.data.children);
    expect(wrapper.find('RedditsPage').props().fetchRedditsRequest).toEqual(fetchRedditsRequest);
  });
});
