import {
  FETCHING_USER_SUCCESS,
  FETCHING_USER,
  FETCHING_USER_ERROR,
  AUTH_USER,
  UNAUTH_USER,
} from "../types";

export function fetchingUserSuccess(user, uid, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    user,
    uid,
    timestamp,
  };
}
//user object with name and uid

export function fetchingUser() {
  return {
    type: FETCHING_USER,
  };
}

export function logError(error) {
  return {
    type: FETCHING_USER_ERROR,
    error,
  };
}

export function authUser(uid) {
  return {
    type: AUTH_USER,
    uid,
  };
}
export function unauthUser() {
  return {
    type: UNAUTH_USER,
  };
}
