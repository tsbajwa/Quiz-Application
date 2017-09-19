import { FETCHING_USER_SUCCESS, FETCHING_USER, FETCHING_USER_ERROR } from "../types";

const initialState = {
  isFetching: false,
  error: "",
  lastUpdated: 0,
  info: {
    name: "",
    uid: "",
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
        isFetching: false,
        error: "",
      };
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
