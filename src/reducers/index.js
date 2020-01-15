import { combineReducers } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({
  bookReducer: bookReducer
})

export default rootReducer;
