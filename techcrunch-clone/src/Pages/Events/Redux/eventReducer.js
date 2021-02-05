import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
} from "./actionTypes";

const initState = {
  events: [],
  isLoading: false,
  error: false,
};

export const mainEventsReducer = (state = initState, { type, payload }) => {
  //   console.log(type, payload);

  switch (type) {
    case FETCH_EVENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        events: [payload],
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
