import { POST_USER_SIGNUP_FAILURE, POST_USER_SIGNUP_REQUEST, POST_USER_SIGNUP_SUCCESS,
    GET_USER_SIGNUP_FAILURE, GET_USER_SIGNUP_REQUEST, GET_USER_SIGNUP_SUCCESS, SIGNIN } from "./actionType";
import axios from "axios"

export const postUserSignupRequest=()=>({
    type:POST_USER_SIGNUP_REQUEST
})
export const postUserSignupSuccess=()=>({
    type:POST_USER_SIGNUP_SUCCESS
})
export const postUserSignupFailure=()=>({
    type:POST_USER_SIGNUP_FAILURE
})

export const addUserSignup=(payload)=>dispatch=> {
    dispatch(postUserSignupRequest())
    axios({
        method:"POST",
        url:"https://techcrunch-clone.herokuapp.com/signUpUsers",
        data:payload
    })
    .then(res=>dispatch(postUserSignupSuccess()))
    .catch(err=>dispatch(postUserSignupFailure()))
} 


export const getUserSignupRequest=()=>({
    type:GET_USER_SIGNUP_REQUEST
})
export const getUserSignupSuccess=(payload)=>({
    type:GET_USER_SIGNUP_SUCCESS,
    payload
})
export const getUserSignupFailure=()=>({
    type:GET_USER_SIGNUP_FAILURE
})

export const getUserSignup=( )=>dispatch=> {
    dispatch(getUserSignupRequest())
    axios({
        method:"get",
        url:"https://techcrunch-clone.herokuapp.com/signUpUsers",
         
    })
    .then(res=>dispatch(getUserSignupSuccess(res.data)))
    .catch(err=>dispatch(getUserSignupFailure()))
} 

export const signIn=()=>({
    type:SIGNIN
})