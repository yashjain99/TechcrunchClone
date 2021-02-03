import {GET_NEWS_DATA_REQ, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE, 
        ADD_COMMENT_REQ, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, 
        DELETE_COMMENT_REQ, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE,
        EDIT_COMMENT_REQ, EDIT_COMMENT_SUCCESS, EDIT_COMMENT_FAILURE} from './actionTypes'
import axios from 'axios';

export const getNewsDataReq = () =>({
    type: GET_NEWS_DATA_REQ
})

export const getNewsDataSuccess =(payload) =>{
    console.log(payload);
    return{

        type : GET_NEWS_DATA_SUCCESS,
        payload
    }
}

export const getNewsDataFailure =(payload) =>({
    type : GET_NEWS_DATA_FAILURE,
    payload
})

export const getNewsData = (id) =>dispatch=>{
    dispatch(getNewsDataReq())

    const config = {
        method: "GET",
        url:`https://techcrunch-clone.herokuapp.com/news/${Number(id)}`
    }

    return axios(config)
                .then(res => dispatch(getNewsDataSuccess(res.data)))
                .catch(err => dispatch(getNewsDataFailure(err)))
}


export const addCommentReq = () =>({
    type: ADD_COMMENT_REQ
})

export const addCommentSuccess =()=>({
    type : ADD_COMMENT_SUCCESS
})

export const addCommentFailure = payload =>({
    type : ADD_COMMENT_FAILURE,
    payload
})
export const addComment = (newsId,payload) => dispatch =>{
    dispatch(addCommentReq());

    const config ={
        method: "PATCH",
        url:`https://techcrunch-clone.herokuapp.com/news/${Number(newsId)}`,
        data : {
            comments : payload
        }
    }
    return axios(config)
        .then(res => dispatch(getNewsData(newsId)))
        .catch(err => dispatch(addCommentFailure(err)))
}


export const deleteCommentReq = () =>({
    type: DELETE_COMMENT_REQ
})

export const deleteCommentSuccess =()=>({
    type : DELETE_COMMENT_SUCCESS
})

export const deleteCommentFailure = payload =>({
    type : DELETE_COMMENT_FAILURE,
    payload
})
export const deleteComment = (newsId,payload) => dispatch =>{
    dispatch(deleteCommentReq());

    const config ={
        method: "PATCH",
        url:`https://techcrunch-clone.herokuapp.com/news/${Number(newsId)}`,
        data : {
            comments : payload
        }
    }
    return axios(config)
        .then(res => dispatch(getNewsData(newsId)))
        .catch(err => dispatch(deleteCommentFailure(err)))
}


export const editCommentReq = () =>({
    type: EDIT_COMMENT_REQ
})

export const editCommentSuccess =()=>({
    type : EDIT_COMMENT_SUCCESS
})

export const editCommentFailure = payload =>({
    type : EDIT_COMMENT_FAILURE,
    payload
})
export const editComment = (newsId,payload) => dispatch =>{
    dispatch(editCommentReq());

    const config ={
        method: "PATCH",
        url:`https://techcrunch-clone.herokuapp.com/news/${Number(newsId)}`,
        data : {
            comments : payload
        }
    }
    return axios(config)
        .then(res => dispatch(getNewsData(newsId)))
        .catch(err => dispatch(editCommentFailure(err)))
}