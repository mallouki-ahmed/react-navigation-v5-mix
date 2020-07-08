import {combineReducers} from 'redux';

import users from './user.reducer';

export const url = `https://template-kh.herokuapp.com`;

export default combineReducers({
  users,
});
