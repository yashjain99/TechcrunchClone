import {
    FETCH_ACCOUNT_DETAILS_REQUEST,
    FETCH_ACCOUNT_DETAILS_SUCCESS,
    FETCH_ACCOUNT_DETAILS_FAILURE
} from "./actionTypes";

const initState = {
    isLoading: false,
    userData: [],
    error: false
}

export const accountReducer = (state = initState, { type, payload }) => {
    console.log(type, payload)

    switch(type) {
        case FETCH_ACCOUNT_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case FETCH_ACCOUNT_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                userData: payload
            }
        case FETCH_ACCOUNT_DETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}