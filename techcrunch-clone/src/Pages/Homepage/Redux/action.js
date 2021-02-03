import axios from "axios";
import {
  FETCH_NEWS_HEADLINE_REQUEST,
  FETCH_NEWS_HEADLINE_SUCCESS,
  FETCH_NEWS_HEADLINE_FAILURE,
} from "./actionTypes";

const fetchNewsHeadlineRequest = () => {
  return {
    type: FETCH_NEWS_HEADLINE_REQUEST,
  };
};

const fetchNewsHeadlineSuccess = (payload) => {
  return {
    type: FETCH_NEWS_HEADLINE_SUCCESS,
    payload,
  };
};

const fetchNewsHeadlineFailure = (error) => {
  return {
    type: FETCH_NEWS_HEADLINE_FAILURE,
    payload: error,
  };
};

export const getNewsHeadlines = () => (dispatch) => {
  dispatch(fetchNewsHeadlineRequest());

  return axios
    .get("https://techcrunch-clone.herokuapp.com/news")
    .then((res) => {
      console.log(res.data);
      dispatch(fetchNewsHeadlineSuccess(res.data));
    })
    .catch((err) => {
      console.log("Error while getting data in home page " + err);
      dispatch(fetchNewsHeadlineFailure());
    });
};
