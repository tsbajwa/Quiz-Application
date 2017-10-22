import { FETCHING_Q, FETCHING_Q_ERROR, FETCHING_Q_SUCCESS } from "../types";

const initialState = {
  isFetching: false,
  error: "",
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case FETCHING_Q:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_Q_SUCCESS: {
      return {
        ...state,
        ...action.questions,
        isFetching: false,
      };
    }
    case FETCHING_Q_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
