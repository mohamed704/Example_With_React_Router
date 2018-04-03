import { createStore, combineReducers, compose } from 'redux';
import { scrollDayReducer } from './containers/TestContainer/reducer';



export const store = createStore(
  combineReducers({
    scrollDayReducer: scrollDayReducer,
  }),
  {}, // initial state
  compose(typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f)
);
