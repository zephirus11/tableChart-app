import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_FILTER,
} from '../actions/dashboardAction';

const initialState = {
  data: [],
  error: null,
  filter: { user: '', category: '' },
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, error: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default dashboardReducer;
