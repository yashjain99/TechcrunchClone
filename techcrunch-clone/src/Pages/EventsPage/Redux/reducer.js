import {GET_EVENT_DATA_REQ, GET_EVENT_DATA_SUCCESS, GET_EVENT_DATA_FAILURE} from './actionTypes'

const initState = {
    isLoading : false,
    events : {},
    isError : false
}

export const reducer = (state = initState, {type, payload}) =>{
    switch(type){
        case GET_EVENT_DATA_REQ:
            return{
                ...state,
                isLoading: true
            }
        case GET_EVENT_DATA_SUCCESS:
            return{
                ...state,
                isLoading : false,
                events: payload
            }
        case GET_EVENT_DATA_FAILURE:
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        default:
            return state
    }
}