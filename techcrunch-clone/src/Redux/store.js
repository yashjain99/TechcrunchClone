import { applyMiddleware, combineReducers, compose, createStore } from "redux";
 
import thunk from "redux-thunk"
import loginReducer from "../Pages/Login/redux/loginReducer";
import tcReducer from "../Pages/TcList/redux/tcReducer";
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducers=combineReducers({ login:loginReducer , tcList:tcReducer })


export const store=createStore(rootReducers,composeEnhancers(applyMiddleware(thunk
    )))