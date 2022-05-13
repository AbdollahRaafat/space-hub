import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import resrvationReducer from './resevations/confugStore';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rocketsReducer,
  resrvationReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
