import { combineReducers } from 'redux';

import error from './error';
import { polls, currentPoll } from './polls';

export default combineReducers({
  error,
  polls,
  currentPoll,
});
