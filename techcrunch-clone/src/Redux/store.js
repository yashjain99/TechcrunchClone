import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { homeReducer } from "../Pages/Homepage/Redux/homeReducer";

const rootReducer = combineReducers ({
    home: homeReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))