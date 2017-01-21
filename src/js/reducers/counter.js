import { INCREMENT, DECREMENT } from 'actions/counter';

export const defaultState = 0;

function counter(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counter;
