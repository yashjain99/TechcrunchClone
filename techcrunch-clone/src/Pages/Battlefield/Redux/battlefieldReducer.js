import { GET_LEADERBOARD_FAILURE, GET_LEADERBOARD_REQUEST, GET_LEADERBOARD_SUCCESS } from "./actionType"

 const initState={
     isLoading:false,
     isError:false,
     leaderboardData:[]
 }

  
 
 const battlefieldReducer = (state=initState,{type,payload}) => {
    //  console.log(type,payload)
    switch(type){
        case GET_LEADERBOARD_REQUEST:
            return {
                ...state,
                isLoading:true
            }
            case GET_LEADERBOARD_SUCCESS:
                return{
                    ...state,
                    isLoading:true,
                    leaderboardData:payload
                }
                case GET_LEADERBOARD_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                    default:
                        return state
    }
 }
 
 export default battlefieldReducer
 