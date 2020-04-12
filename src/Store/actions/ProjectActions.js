import { isEmpty } from 'lodash';
import {
  ALL_PROJECTS_SUCCESS,
  ALL_PROJECTS_REQUEST,
  ALL_PROJECTS_ERROR
} from '../constants';

const allProjectActionCreate = (type, projects) => ({
  type,
  projects
});

const isConnectionWithBase = (DB) => {
  return !isEmpty(DB);
};

export const GetAllFromDB = () => (dispatch, getState) => {
  dispatch(allProjectActionCreate(ALL_PROJECTS_REQUEST));
  const { DB } = getState();
  if (isConnectionWithBase(DB)) {
    const transaction = DB.transaction('projects', 'readonly');
    const request = transaction.objectStore('projects').getAll();
    request.onsuccess = (event) => {
      dispatch(allProjectActionCreate(ALL_PROJECTS_SUCCESS, event.target.result))
    };
    request.onerror = (event) => {
      dispatch(allProjectActionCreate(ALL_PROJECTS_ERROR))
    }
  } else {
    dispatch(allProjectActionCreate(ALL_PROJECTS_ERROR));
  }
};
