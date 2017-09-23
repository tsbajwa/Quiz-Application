import {
  FETCHING_USER_SUCCESS,
  FETCHING_USER,
  FETCHING_USER_ERROR,
  AUTH_USER,
  UNAUTH_USER,
  REMOVE_FETCHING_USER,
} from "../types";

import auth, { logout, saveUser } from "../../helpers/auth";
export function fetchingUserSuccess(name, uid, user) {
  return {
    type: FETCHING_USER_SUCCESS,
    name,
    uid,
    user,
  };
}

export function removeFetchingUser() {
  return {
    type: REMOVE_FETCHING_USER,
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
function unAuthUser() {
  return {
    type: UNAUTH_USER,
  };
}

export function fetchAndHandleAuthedUser() {
  return dispatch => {
    dispatch(fetchingUser());
    return auth()
      .then(({ user }) => {
        const userData = user.providerData[0];
        const { displayName, uid } = userData;
        const userInfo = { name: displayName, uid };
        return dispatch(fetchingUserSuccess(displayName, uid, userInfo));
      })
      .then(({ user }) => {
        saveUser(user);
      })
      .catch(error => {
        dispatch(logError(error));
      });
  };
}

export function logOutAndUnAuth() {
  return dispatch => {
    logout().then(() => {
      dispatch(unAuthUser());
    });
  };
}
