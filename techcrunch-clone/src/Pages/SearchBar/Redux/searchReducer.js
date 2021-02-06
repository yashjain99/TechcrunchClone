import {
  FETCH_SEARCH_KEYWORDS_REQUEST,
  FETCH_SEARCH_KEYWORDS_SUCCESS,
  FETCH_SEARCH_KEYWORDS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "./actionTypes";

const initState = {
  searchKeywords: [],
  isLoading: false,
  error: false,
  news: [],
};

export const searchReducer = (state = initState, { type, payload }) => {
  // console.log(type, payload)

  switch (type) {
    case FETCH_SEARCH_KEYWORDS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case FETCH_SEARCH_KEYWORDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        searchKeywords: payload,
      };
    case FETCH_SEARCH_KEYWORDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        news: payload,
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
