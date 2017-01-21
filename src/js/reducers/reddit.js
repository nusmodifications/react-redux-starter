import { FETCH_REDDITS } from 'actions/reddit';
import * as RequestResultCases from 'middlewares/requests-middleware';

function reddit(state = [], action) {
  switch (action.type) {
    case FETCH_REDDITS + RequestResultCases.SUCCESS:
      return action.payload.data.children;
    default:
      return state;
  }
}

export default reddit;
