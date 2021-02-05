import {GET_NEWSLETTERS_REQ, GET_NEWSLETTERS_SUCCESS, GET_NEWSLETTERS_FAILURE} from './actionType'

const initState = {
    newsLettersData : [],
    isLoading : false,
    isError : false
}

export const reducer = (state = initState, {type, payload}) =>{
    switch(type){
        case GET_NEWSLETTERS_REQ:
            return{
                ...state,
                isLoading : true
            }
        case GET_NEWSLETTERS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                newsLettersData : payload
            }
        case GET_NEWSLETTERS_FAILURE:
            return{
                ...state,
                isLoading: false,
                isError : true
            }
        default:
            return state
    }
}