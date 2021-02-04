import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { homeReducer } from "../Pages/Homepage/Redux/homeReducer";
import loginReducer from "../Pages/Login/redux/loginReducer";
import {reducer as newsReducer} from '../Pages/News/Redux/Reducer'

const rootReducer = combineReducers ({
    home: homeReducer,
    login: loginReducer,
    news : newsReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))