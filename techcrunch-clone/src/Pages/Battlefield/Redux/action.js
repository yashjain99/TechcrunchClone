import { GET_LEADERBOARD_FAILURE, GET_LEADERBOARD_REQUEST, GET_LEADERBOARD_SUCCESS } from "./actionType";
import axios from "axios"

export const getLeaderboardRequest=()=>({
    type:GET_LEADERBOARD_REQUEST
})
export const getLeaderboardSuccess=(payload)=>({
    type:GET_LEADERBOARD_SUCCESS,
    payload
})
export const getLeaderboardFailure=()=>({
    type:GET_LEADERBOARD_FAILURE
})

export const getLeaderboardData=(url)=>(dispatch)=>{
    dispatch(getLeaderboardRequest())
    axios({
        method:"get",
        url:url,
    })
    .then(res=>dispatch(getLeaderboardSuccess(res.data)))
    .catch(err=>dispatch(getLeaderboardFailure()))
}