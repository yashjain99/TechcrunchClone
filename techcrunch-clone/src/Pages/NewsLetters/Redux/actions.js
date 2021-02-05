import axios from 'axios'
import {GET_NEWSLETTERS_REQ, GET_NEWSLETTERS_SUCCESS, GET_NEWSLETTERS_FAILURE} from './actionType'

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