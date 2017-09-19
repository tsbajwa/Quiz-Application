import { FETCHING_USER_SUCCESS } from "../types";

const initialState = {
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
      };
    default:
      return state;
  }
}
