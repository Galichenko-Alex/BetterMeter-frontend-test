/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineReducers } from 'redux';

import { filterOptionReducer, STATE_KEY as FILER_OPTIONS_STATE_KEY } from './filter-options-reducer';
import { userReducer, STATE_KEY as USER_STATE_KEY } from './user-reducer';

const combineReducer = combineReducers({
  [FILER_OPTIONS_STATE_KEY]: filterOptionReducer,
  [USER_STATE_KEY]: userReducer,
});

export default combineReducer;
