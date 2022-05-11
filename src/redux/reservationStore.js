import { createStore, combineReducers, applyMiddleware } from 'redux';
import resrvationReducer from './resevations/confugStore';

const reducer = combineReducers({
  resrvationReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(),
);

export default store;
