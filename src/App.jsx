import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dashboardReducer from './redux/reducers/dashboardReducer';
import dashboardSaga from './redux/sagas/dashboardSaga';
import Dashboard from './components/Dashboard/Dashboard';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(dashboardReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(dashboardSaga);

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
