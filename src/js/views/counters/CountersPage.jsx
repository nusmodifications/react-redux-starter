import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from 'actions/counter';

export const CountersPage = props => (
  <div>
    <h1>Counter</h1>
    <hr/>
    <h3 className="counter-value">{props.counter}</h3>
    <button className="btn btn-primary btn-increment" onClick={props.increment}>+</button>
    &nbsp;Buttons&nbsp;
    <button className="btn btn-primary btn-decrement" onClick={props.decrement}>-</button>
  </div>
);

CountersPage.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
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
