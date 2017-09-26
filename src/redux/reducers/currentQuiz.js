import { ADD_ANSWER, SAVE_CURRENT_QUIZ } from "../types";

export default function currentQuiz(state = {}, action) {
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
    case SAVE_CURRENT_QUIZ: {
      return action.currentQuiz;
    }
    default:
      return state;
  }
}
