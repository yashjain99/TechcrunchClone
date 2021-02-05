import { GET_TCLIST_FAILURE, GET_TCLIST_REQUEST, GET_TCLIST_SUCCESS } from "./actionType"

 const initState={
     isLoading:false,
     isError:false,
     tcData:[]
 }

  
 
 const tcReducer = (state=initState,{type,payload}) => {
    //  console.log(type,payload)
    switch(type){
        case GET_TCLIST_REQUEST:
            return {
                ...state,
                isLoading:true
            }
            case GET_TCLIST_SUCCESS:
                return{
                    ...state,
                    isLoading:true,
                    tcData:payload
                }
                case GET_TCLIST_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                    default:
                        return state
    }
 }
 
 export default tcReducer
 