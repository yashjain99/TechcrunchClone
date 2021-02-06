import {
  ADD_EVENT_DETAILS_REQ,
  ADD_EVENT_DETAILS_SUCCESS,
  ADD_EVENT_DETAILS_FAILURE,
} from "./actionType";

const initState = {
  data: [],
  isLoading: false,
  error: false,
};

export const paymentReducer = (state = initState, { type, payload }) => {
  //   console.log(type, payload);

  switch (type) {
    case ADD_EVENT_DETAILS_REQ:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ADD_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        events: payload,
      };
    case ADD_EVENT_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
