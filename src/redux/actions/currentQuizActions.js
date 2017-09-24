import { ADD_ANSWER, SAVE_CURRENT_QUIZ, RESET_CURRENT_Q_INDEX } from "../types";

export function addAnswer(answer, questionKey, questionObject) {
  return {
    type: ADD_ANSWER,
    answer,
    questionKey,
    questionObject,
  };
}

export function saveCurrentQuiz(currentQuiz) {
  return {
    type: SAVE_CURRENT_QUIZ,
    currentQuiz,
  };
}

export function resetCurrentQIndex() {
  return {
    type: RESET_CURRENT_Q_INDEX,
  };
}
