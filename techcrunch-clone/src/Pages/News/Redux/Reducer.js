import {GET_NEWS_DATA_REQ, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE} from './actionTypes'

const initState = {
    isLoading: false,
    news : [],
    isError : false,
    data : {}
}
export const reducer = (state = initState, {type, payload}) =>{
    // console.log(type, payload);
    switch(type){
        case GET_NEWS_DATA_REQ:
            return{
                ...state,
                isLoading: true
            }
        case GET_NEWS_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                news : payload
            }
        case GET_NEWS_DATA_FAILURE:
            return{
                ...state,
                isLoading: false,
                isError : true
            }
        default:
            return state

    }
}