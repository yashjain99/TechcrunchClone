import {
    FETCH_NEWS_HEADLINE_REQUEST,
    FETCH_NEWS_HEADLINE_SUCCESS,
    FETCH_NEWS_HEADLINE_FAILURE
} from "./actionTypes";

const initState = {
    newsHeadlines: [],
    isLoading: false,
    error: false
}

export const homeReducer = (state = initState, {type, payload}) => {
    // console.log(type, payload)

    switch(type) {
        case FETCH_NEWS_HEADLINE_REQUEST: 
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case FETCH_NEWS_HEADLINE_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: false,
                newsHeadlines: payload
            }
        case FETCH_NEWS_HEADLINE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}