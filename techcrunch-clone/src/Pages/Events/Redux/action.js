import axios from "axios";
import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from "./actionTypes";

const fetchEventsRequest = () => {
  return {
    type: FETCH_EVENTS_REQUEST,
  };
};

const fetchEventsSuccess = (payload) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload,
  };
};

const fetchEventsFailure = (error) => {
  return {
    type: FETCH_EVENTS_FAILURE,
    payload: error,
  };
};

export const getEvents = () => (dispatch) => {
  dispatch(fetchEventsRequest());

  return axios
    .get("https://techcrunch-clone.herokuapp.com/eventsData")
    .then((res) => {
      // console.log(res.data);
      dispatch(fetchEventsSuccess(res.data));
    })
    .catch((err) => {
      console.log("Error while getting data in home page " + err);
      dispatch(fetchEventsFailure());
    });
};
