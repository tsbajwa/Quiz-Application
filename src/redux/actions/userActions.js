import { FETCHING_USER_SUCCESS, FETCHING_USER, FETCHING_USER_ERROR } from "../types";

export function fetchedUser(user) {
  return {
    type: FETCHING_USER_SUCCESS,
    user,
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
