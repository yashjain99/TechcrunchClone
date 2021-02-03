import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import tcReducer from "../Pages/TcList/redux/tcReducer";
import { homeReducer } from "../Pages/Homepage/Redux/homeReducer";
import loginReducer from "../Pages/Login/Redux/loginReducer";


const rootReducer = combineReducers({
    home: homeReducer,

    login: loginReducer, tcList: tcReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))
