import axios from "axios";
import {
    FETCH_STARTUP_NEWS_REQUEST,
    FETCH_STARTUP_NEWS_SUCCESS,
    FETCH_STARTUP_NEWS_FAILURE
} from "./actionTypes";

const fetchStartupNewsRequest = () => {
  return {
    type: FETCH_STARTUP_NEWS_REQUEST,
  };
};

const fetchStartupNewsSuccess = (payload) => {
  return {
    type: FETCH_STARTUP_NEWS_SUCCESS,
    payload,
  };
};

const fetchStartupNewsFailure = (error) => {
  return {
    type: FETCH_STARTUP_NEWS_FAILURE,
    payload: error,
  };
};

export const getStartupNews = () => (dispatch) => {
  dispatch(fetchStartupNewsRequest());

  return axios
    .get("https://techcrunch-clone.herokuapp.com/news")
    .then((res) => {
      console.log(res.data);
      dispatch(fetchStartupNewsSuccess(res.data));
    })
    .catch((err) => {
      console.log("Error while getting data in home page " + err);
      dispatch(fetchStartupNewsFailure());
    });
};
