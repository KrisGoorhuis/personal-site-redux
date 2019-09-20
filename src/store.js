import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/rootReducer.js'

const initialState = {};

const middleware = [];

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware)
);

export default store;