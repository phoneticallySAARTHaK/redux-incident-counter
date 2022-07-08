import { createStore } from 'redux';
import { reducer } from './reducer';

const initialState = {
  value: 0,
  anotherValue: 'something',
  extra: 1
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
