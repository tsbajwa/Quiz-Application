import { ADD_ANSWER } from "../types";

const initialState = {
  asdadsadasd: {
    questionText: "Question One peeps",
    answer: "Correct answer",
    questionid: "asdasdad",
    answerSelected: "",
    questionNumber: 1,
    answerOptions: {
      1: "Option 1",
      2: "Option 2",
      3: "Correct answer",
    },
  },
  adsaljdnasjda: {
    questionText: "Question two peeps",
    answer: "Correct answer",
    questionid: "asdasasdd",
    answerSelected: "",
    questionNumber: 2,
    answerOptions: {
      1: "Option 1",
      2: "Option 2",
      3: "Correct answer",
    },
  },
};

export default function currentQuiz(state = initialState, action) {
  switch (action.type) {
    case ADD_ANSWER: {
      const { questionKey, questionObject, answer } = action;
      const saveSelectedAnswer = {
        ...questionObject,
        answerSelected: answer,
      };
      return {
        ...state,
        [questionKey]: saveSelectedAnswer,
      };
    }
    default:
      return state;
  }
}
