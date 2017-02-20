// @flow
import type { StoreState } from 'reducers';

import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { increment, decrement } from 'actions/counter';

type Props = {
  counter: number,
  increment: Function,
  decrement: Function,
};

export const CountersPage = (props: Props) => (
  <DocumentTitle title="Counter">
    <div>
      <h1>Counter</h1>
      <hr/>
      <h3 className="counter-value">{props.counter}</h3>
      <button className="btn btn-primary btn-increment" onClick={props.increment}>+</button>
      &nbsp;Buttons&nbsp;
      <button className="btn btn-primary btn-decrement" onClick={props.decrement}>-</button>
    </div>
  </DocumentTitle>
);
// Needed for Enzyme to render the component with the name to be used as selector.
CountersPage.displayName = 'CountersPage';

function mapStateToProps(state: StoreState) {
  return {
    counter: state.counter,
  };
}

export default connect(
  mapStateToProps,
  {
    increment,
    decrement,
  },
)(CountersPage);
