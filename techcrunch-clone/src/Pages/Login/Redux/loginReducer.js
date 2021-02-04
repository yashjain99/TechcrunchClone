import { POST_USER_SIGNUP_FAILURE, POST_USER_SIGNUP_REQUEST, POST_USER_SIGNUP_SUCCESS,
    GET_USER_SIGNUP_FAILURE, GET_USER_SIGNUP_REQUEST, GET_USER_SIGNUP_SUCCESS, SIGNIN } from './actionType'
const initState={
    isLoading:false,
    isError:false,
    isSigned:false,
    userData:[]
}

const loginReducer = (state=initState,{type,payload}) => {
    // console.log(type,payload)
    switch(type){
        case POST_USER_SIGNUP_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case POST_USER_SIGNUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isSigned:true,
            }
        case POST_USER_SIGNUP_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case GET_USER_SIGNUP_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case GET_USER_SIGNUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                 userData:payload
            }
        case GET_USER_SIGNUP_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        case SIGNIN:
            return{
                ...state,
                isSigned:true
            }
            default:
                return state
    }
}

export default loginReducer
