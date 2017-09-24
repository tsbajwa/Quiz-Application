import {
  FETCHING_USER_SUCCESS,
  FETCHING_USER,
  FETCHING_USER_ERROR,
  AUTH_USER,
  UNAUTH_USER,
  REMOVE_FETCHING_USER,
} from "../types";

const initialState = {
  isFetching: true,
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
      };
    case UNAUTH_USER: {
      return {
        ...state,
        isAuthed: false,
        authedId: "",
        name: "",
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
            authedId: action.uid,
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
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
