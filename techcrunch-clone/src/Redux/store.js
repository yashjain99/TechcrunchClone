import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import tcReducer from "../Pages/TcList/Redux/tcReducer";
import { homeReducer } from "../Pages/Homepage/Redux/homeReducer";
import loginReducer from "../Pages/Login/redux/loginReducer";
import {reducer as commentReducer} from '../Pages/News/Redux/Reducer';
import { startupNewsReducer } from "../Pages/StartupNews/Redux/startupNewsReducer";
import { searchReducer } from "../Pages/SearchBar/Redux/searchReducer";
import  battlefieldReducer  from "../Pages/Battlefield/Redux/battlefieldReducer"
import {reducer as eventsReducer} from '../Pages/EventsPage/Redux/reducer'
import { accountReducer } from "../Pages/AccountDetails/Redux/accountReducer"

const rootReducer = combineReducers({
    home: homeReducer,
    login: loginReducer,
    news: commentReducer,
    tcList: tcReducer,
    startupNews: startupNewsReducer,
    search: searchReducer,
    leaderboard: battlefieldReducer,
    events: eventsReducer,
    account: accountReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))
