import { GET_TCLIST_FAILURE, GET_TCLIST_REQUEST, GET_TCLIST_SUCCESS } from "./actionType";
import axios from "axios"

export const getTcListRequest=()=>({
    type:GET_TCLIST_REQUEST
})
export const getTcListSuccess=(payload)=>({
    type:GET_TCLIST_SUCCESS,
    payload
})
export const getTcListFailure=()=>({
    type:GET_TCLIST_FAILURE
})

export const getTcListData=(url)=>(dispatch)=>{
    dispatch(getTcListRequest())
    axios({
        method:"get",
        url:url,
    })
    .then(res=>dispatch(getTcListSuccess(res.data)))
    .catch(err=>dispatch(getTcListFailure()))
}