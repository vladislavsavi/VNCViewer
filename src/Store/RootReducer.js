import { combineReducers } from 'redux';
import { DBReducer } from './reducers';

export const RootReducer = combineReducers({
  DB: DBReducer
});
