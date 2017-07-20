// @flow
import React, { Component } from 'react';
import autobind from 'react-autobind';

type Props = {};
type State = {};

export default class MyComponent extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  state: State;

  render() {
    return (
      <div>
        <p>My Component</p>
      </div>
    );
  }
}
