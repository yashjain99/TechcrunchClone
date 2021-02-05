import {
    FETCH_STARTUP_NEWS_REQUEST,
    FETCH_STARTUP_NEWS_SUCCESS,
    FETCH_STARTUP_NEWS_FAILURE
} from "./actionTypes";

const initState = {
    newsHeadlines: [],
    isLoading: false,
    error: false
}

export const startupNewsReducer = (state = initState, {type, payload}) => {
    // console.log(type, payload)

    switch(type) {
        case FETCH_STARTUP_NEWS_REQUEST: 
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case FETCH_STARTUP_NEWS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: false,
                newsHeadlines: payload
            }
        case FETCH_STARTUP_NEWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}