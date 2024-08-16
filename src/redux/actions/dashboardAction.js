export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SET_FILTER = 'SET_FILTER';

export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
