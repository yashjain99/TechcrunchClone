import axios from "axios";
import {
    FETCH_ACCOUNT_DETAILS_REQUEST,
    FETCH_ACCOUNT_DETAILS_SUCCESS,
    FETCH_ACCOUNT_DETAILS_FAILURE
} from "./actionTypes";

const fetchAccountDetailsRequest = () => {
    return {
        type: FETCH_ACCOUNT_DETAILS_REQUEST
    }
}

const fetchAccountDetailsSuccess = (payload) => {
    return {
        type: FETCH_ACCOUNT_DETAILS_SUCCESS,
        payload
    }
}

const fetchAccountDetailsFailure = (error) => {
    return {
        type: FETCH_ACCOUNT_DETAILS_FAILURE,
        payload: error
    }
}

export const getAccountDetails = (payload) => (dispatch) => {
    dispatch(fetchAccountDetailsRequest());

    axios.get(`https://techcrunch-clone.herokuapp.com/signUpUsers/${payload}`)
        .then((res) => {
            console.log(res.data)
            dispatch(fetchAccountDetailsSuccess(res.data))
        })
        .catch((err) => {
            console.log("Can't fetch account details" + err)
            dispatch(fetchAccountDetailsFailure(err))
        })
}