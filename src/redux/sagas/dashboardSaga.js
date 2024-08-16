import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/dashboardAction';

function* fetchData() {
  try {
    const response = yield call(
      axios.get,
      'http://52.168.1.54:8080/api/v1/userActivities'
    );
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error.message });
  }
}

function* dashboardSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default dashboardSaga;
