import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import dashboardReducer from './reducers/dashboardReducer';
import dashboardSaga from './sagas/dashboardSaga';

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
