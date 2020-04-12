import { DB_REQUEST, DB_SUCCESS } from '../constants';

export const DBReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case DB_REQUEST:
      return state;
    case DB_SUCCESS:
      return action.DB;
    default:
      return state;
  }
};
