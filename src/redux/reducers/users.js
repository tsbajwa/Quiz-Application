import {
  FETCHING_USER_SUCCESS,
  FETCHING_USER,
  FETCHING_USER_ERROR,
  AUTH_USER,
  UNAUTH_USER,
} from "../types";

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: "",
    uid: "",
  },
};

function user(state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        lastUpdated: action.timestamp,
        info: action.user,
      };
    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  error: "",
  isAuthed: false,
  authedId: "",
};

export default function users(state = initialState, action) {
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
      return action.user === null
        ? {
            ...state,
            isFetching: false,
            error: "",
          }
        : {
            ...state,
            isFetching: false,
            error: "",
            [action.uid]: user(state[action.uid], action),
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
