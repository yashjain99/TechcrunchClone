import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import tcReducer from "../Pages/TcList/Redux/tcReducer";
import { homeReducer } from "../Pages/Homepage/Redux/homeReducer";
import loginReducer from "../Pages/Login/Redux/loginReducer";
import {reducer as commentReducer} from '../Pages/News/Redux/Reducer';
import { startupNewsReducer } from "../Pages/StartupNews/Redux/startupNewsReducer";
import  battlefieldReducer  from "../Pages/Battlefield/Redux/battlefieldReducer"
const rootReducer = combineReducers({
    home: homeReducer,
    login: loginReducer,
    news : commentReducer,
    tcList: tcReducer,
    startupNews: startupNewsReducer,
    leaderboard:battlefieldReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))
