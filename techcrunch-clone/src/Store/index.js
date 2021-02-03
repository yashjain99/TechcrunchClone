import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {reducer as commentReducer} from '../Pages/News/Redux/Reducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    comment : commentReducer
})
export const store = createStore(
    commentReducer,
    composeEnhancers(applyMiddleware(thunk))
)