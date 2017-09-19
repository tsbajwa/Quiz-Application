import {
  FETCHING_USER_SUCCESS,
  FETCHING_USER,
  FETCHING_USER_ERROR,
  AUTH_USER,
  UNAUTH_USER,
} from "../types";

const initialState = {
  isFetching: false,
  error: "",
  isAuthed: false,
  authedId: "",
  name: "",
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      };
    case UNAUTH_USER: {
      return {
        ...state,
        isAuthed: false,
        authedId: "",
      };
    }
    case FETCHING_USER_SUCCESS:
      return action.uid === null
        ? {
            ...state,
            isFetching: false,
            error: "",
          }
        : {
            ...state,
            isFetching: false,
            error: "",
            authedid: action.uid,
            name: action.name,
          };
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
