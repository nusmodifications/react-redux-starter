import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import {
  requestStateInitial,
  requestStatePending,
  requestStateFailure,
  requestStateSuccessful,
} from 'utils/request-state-utils';
import { RedditsPage, mapStateToProps } from './RedditsPage';
import mockReddits from 'mocks/reddits.json';

const mockStore = configureStore();

describe('RedditsPage', () => {
  it('should render self and subcomponents', () => {
    const mockSearch = jest.fn();
    const wrapper = mount(
      <RedditsPage fetchReddits={mockSearch}
        fetchRedditsRequest={requestStateInitial}
      />
    );
    expect(wrapper.find('.reddits-page').length).toBe(1);
    expect(wrapper.find('input').prop('value')).toBe('reactjs');
    expect(mockSearch).toBeCalledWith('reactjs');
  });

  it('should render loading section for pending request', () => {
    const wrapper = mount(
      <RedditsPage items={mockReddits.data.children}
        fetchReddits={() => {}}
        fetchRedditsRequest={requestStatePending}
      />
    );
    expect(wrapper.find('.reddits-loading').length).toBe(1);
    expect(wrapper.find('.reddits-failed').length).toBe(0);
    expect(wrapper.find('.reddits-loaded').length).toBe(0);
  });

  it('should render reddits list for successful request', () => {
    const wrapper = mount(
      <RedditsPage items={mockReddits.data.children}
        fetchReddits={() => {}}
        fetchRedditsRequest={requestStateSuccessful}
      />
    );
    expect(wrapper.find('.reddits-loading').length).toBe(0);
    expect(wrapper.find('.reddits-failed').length).toBe(0);
    expect(wrapper.find('.reddits-loaded').length).toBe(1);

    expect(wrapper.find('ul li').length).toBe(mockReddits.data.children.length);
  });

  it('should render error message for failed request', () => {
    const wrapper = mount(
      <RedditsPage items={mockReddits.data.children}
        fetchReddits={() => {}}
        fetchRedditsRequest={requestStateFailure}
      />
    );
    expect(wrapper.find('.reddits-loading').length).toBe(0);
    expect(wrapper.find('.reddits-failed').length).toBe(1);
    expect(wrapper.find('.reddits-loaded').length).toBe(0);
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

  it('should convert store state to props', () => {
    const store = {
      reddits: mockReddits.data.children,
      requests: {
        fetchRedditsRequest: requestStatePending,
      },
    };
    const ownProps = {};
    const props = mapStateToProps(store, ownProps);
    expect(props).toEqual({
      items: mockReddits.data.children,
      fetchRedditsRequest: requestStatePending,
    });
  });
});
