import {
  ADD_EVENT_DETAILS_REQ,
  ADD_EVENT_DETAILS_SUCCESS,
  ADD_EVENT_DETAILS_FAILURE,
} from "./actionType";
import axios from "axios";

export const addEventRequest = () => ({
  type: ADD_EVENT_DETAILS_REQ,
});
export const addEventSuccess = () => ({
  type: ADD_EVENT_DETAILS_SUCCESS,
});
export const addEventFailure = () => ({
  type: ADD_EVENT_DETAILS_FAILURE,
});

export const addEventDetails = (payload, id) => (dispatch) => {
  dispatch(addEventRequest());
  axios({
    method: "PATCH",
    url: `https://techcrunch-clone.herokuapp.com/signUpUsers/${id}`,
    data: {
      eventsBooked: payload,
    },
  })
    .then((res) => dispatch(addEventSuccess()))
    .catch((err) => dispatch(addEventFailure()));
};
