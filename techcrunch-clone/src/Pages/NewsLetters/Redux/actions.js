import axios from 'axios'
import {GET_NEWSLETTERS_REQ, GET_NEWSLETTERS_SUCCESS, GET_NEWSLETTERS_FAILURE, ADD_NEWSLETTERS_REQ, ADD_NEWSLETTERS_SUCCESS, ADD_NEWSLETTERS_FAILURE} from './actionType'

export const getNewsLettesReq = () =>({
    type : GET_NEWSLETTERS_REQ
})

export const getNewsLettesSuccess = (payload) =>({
    type : GET_NEWSLETTERS_SUCCESS,
    payload
})

export const getNewsLettesFailure = (payload) =>({
    type : GET_NEWSLETTERS_FAILURE,
    payload
})


export const getNewsLettes = () =>dispatch =>{
    dispatch(getNewsLettesReq())

    const config = {
        method : "GET",
        url : "https://techcrunch-clone.herokuapp.com/newsLetters"
    }

    axios(config)
        .then(res => dispatch(getNewsLettesSuccess(res.data)))
        .catch(err => dispatch(getNewsLettesFailure(err)))
}

export const addNewsLettersReq = () =>({
    type : ADD_NEWSLETTERS_REQ
})

export const addNewsLettersSuccess = () =>({
    type : ADD_NEWSLETTERS_SUCCESS
})

export const addNewsLettersFailure = () =>({
    type : ADD_NEWSLETTERS_FAILURE,
    
})


export const addNewsLetters = (userId, payload) =>dispatch =>{
    // console.log("------------------",userId, payload);
    dispatch(addNewsLettersReq())

    const config = {
        method : "PATCH",
        url : `https://techcrunch-clone.herokuapp.com/signUpUsers/${userId}`,
        data :{
            newsLetters : payload
        }
    }

    axios(config)
        .then(res => dispatch(addNewsLettersSuccess()))
        .catch(err => dispatch(addNewsLettersFailure()))
}