import axios from "axios";
import {
    FETCH_SEARCH_KEYWORDS_REQUEST,
    FETCH_SEARCH_KEYWORDS_SUCCESS,
    FETCH_SEARCH_KEYWORDS_FAILURE,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
} from "./actionTypes";

const fetchSearchKeywordsRequest = () => {
    return {
        type: FETCH_SEARCH_KEYWORDS_REQUEST
    }
}

const fetchSearchKeywordsSuccess = (payload) => {
    return {
        type: FETCH_SEARCH_KEYWORDS_SUCCESS,
        payload
    }
}

const fetchSearchKeywordsFailure = (error) => {
    return {
        type: FETCH_SEARCH_KEYWORDS_FAILURE,
        payload: error
    }
}

export const getSearchQuery = (payload) => (dispatch) => {
    dispatch(fetchSearchKeywordsRequest())

    axios.get(`https://techcrunch-clone.herokuapp.com/searchKeywords?q=${payload}`)
        .then((res) => {
            console.log(res.data)
            dispatch(fetchSearchKeywordsSuccess(res.data))
        })
        .catch((err) => {
            console.log("Can't fetch search keywords" + err)
            dispatch(fetchSearchKeywordsFailure(err))
        })
}

const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

const fetchNewsSuccess = (payload) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload,
  };
};

const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};

export const getNewsBySearch = (payload) => (dispatch) => {
  dispatch(fetchNewsRequest());

  return axios
    .get(`https://techcrunch-clone.herokuapp.com/news?q=${payload}`)
    .then((res) => {
      console.log(res.data);
      dispatch(fetchNewsSuccess(res.data));
    })
    .catch((err) => {
      console.log("Error while getting data in home page " + err);
      dispatch(fetchNewsFailure());
    });
};
