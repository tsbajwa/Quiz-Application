import { SAVE_QUIZ_ORDER } from "../types";

export function saveQuizOrder(quizOrder) {
  return {
    type: SAVE_QUIZ_ORDER,
    quizOrder,
  };
}
