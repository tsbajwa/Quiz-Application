import { FETCHING_Q, FETCHING_Q_ERROR, FETCHING_Q_SUCCESS } from "../types";
import { fetchQuestions } from "../../helpers/api";

export function fetchingQ() {
  return {
    type: FETCHING_Q,
  };
}

function fetchingQError(error) {
  return {
    type: FETCHING_Q_ERROR,
    error: "We were unable to load the questions at this time. Please refresh and try again",
  };
}

export function fetchingQSuccess(questions) {
  return {
    type: FETCHING_Q_SUCCESS,
    questions,
  };
}

export function fetchAndSaveQuestions() {
  return dispatch => {
    dispatch(fetchingQ());
    fetchQuestions();
  };
}

export function getQuestions() {
  return dispatch => {
    dispatch(fetchingQ());
    return fetchQuestions()
      .then(questions => {
        return dispatch(fetchingQSuccess(questions));
      })
      .then(({ questions }) => {
        return questions;
      });
  };
}
