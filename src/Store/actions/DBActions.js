import { DataBase } from '../../DataBase';
import { DB_REQUEST, DB_SUCCESS } from '../constants';

const actionDBCreate = (type, DB) => ({
  type,
  DB
});

export const connectDB = () => dispatch => {
  dispatch(actionDBCreate(DB_REQUEST));
  new DataBase().connect()
    .then(
      (DB) => DB,
      (error) => console.error(error)
    ).then((DB) => dispatch(actionDBCreate(DB_SUCCESS, DB)))
};
