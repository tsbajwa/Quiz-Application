import {
  FETCHING_USER_SUCCESS,
  FETCHING_USER,
  FETCHING_USER_ERROR,
  AUTH_USER,
  UNAUTH_USER,
} from "../types";

import auth from "../../helpers/auth";
export function fetchingUserSuccess(name, uid) {
  return {
    type: FETCHING_USER_SUCCESS,
    name,
    uid,
  };
}

function fetchingUser() {
  return {
    type: FETCHING_USER,
  };
}

function logError(error) {
  return {
    type: FETCHING_USER_ERROR,
    error,
  };
}

function authUser(uid) {
  return {
    type: AUTH_USER,
    uid,
  };
}
function unauthUser() {
  return {
    type: UNAUTH_USER,
  };
}
//returned auth so that promise is returned and can chain on
export function fetchAndHandleAuthedUser() {
  return dispatch => {
    dispatch(fetchingUser());
    return auth()
      .then(user => {
        const { uid, displayName } = user.user;
        dispatch(fetchingUserSuccess(displayName, uid));
      })
      .catch(error => {
        dispatch(logError(error));
      });
  };
}
