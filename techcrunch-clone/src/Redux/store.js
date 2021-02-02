import { applyMiddleware, compose, createStore } from "redux";
 
import thunk from "redux-thunk"
import loginReducer from "../Pages/Login/redux/loginReducer";
 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store=createStore(loginReducer,composeEnhancers(applyMiddleware(thunk
    )))