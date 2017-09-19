const FETCHING_QUESTIONS = "FETCHING_QUESTIONS";

const initialState = {
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
    case FETCHING_QUESTIONS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
