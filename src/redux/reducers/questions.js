import { FETCHING_Q, FETCHING_Q_ERROR, FETCHING_Q_SUCCESS } from "../types";

const initialState = {
  isFetching: false,
  error: "",
  123123: {
    question: "This is the first q",
    answer: "Correct answer",
    uuid: "string",
    answerOptions: {
      1: "Option 1",
      2: "Option 2",
      3: "Correct answer",
    },
  },
  4324234: {
    question: "This is the seccxvond q",
    answer: "Correct",
    answerOptions: {
      1: "Option 1",
      2: "Correct",
      3: "Not answer",
    },
  },
  12312312: {
    question: "This asdis the third q",
    answer: "Correct",
    answerOptions: {
      1: "Option 1",
      2: "Correct",
      3: "Not answer",
    },
  },
  1123123: {
    question: "This iasds the fourth q",
    answer: "Correct",
    answerOptions: {
      1: "Option 1",
      2: "Correct",
      3: "Not answer",
    },
  },
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
