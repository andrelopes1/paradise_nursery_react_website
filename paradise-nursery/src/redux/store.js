// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Use named import
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



