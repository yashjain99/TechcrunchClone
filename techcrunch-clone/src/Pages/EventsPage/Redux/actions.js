import axios from 'axios'
import {GET_EVENT_DATA_REQ, GET_EVENT_DATA_SUCCESS, GET_EVENT_DATA_FAILURE} from './actionTypes'

export const getEventDataReq = () =>({
    type : GET_EVENT_DATA_REQ
})

export const getEventDataSuccess = (payload) =>({
    type : GET_EVENT_DATA_SUCCESS,
    payload
})

export const getEventDataFailure = (payload) =>({
    type : GET_EVENT_DATA_FAILURE,
    payload
})

export const getEventData = () =>dispatch =>{
    dispatch(getEventDataReq())

    const config={
        method : "GET",
        url : "https://techcrunch-clone.herokuapp.com/events"
    }

    axios(config)
        .then(res => dispatch(getEventDataSuccess(res.data)))
        .catch(err => dispatch(getEventDataFailure(err)))
}