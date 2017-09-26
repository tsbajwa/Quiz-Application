import { SAVE_QUIZ_ORDER } from "../types";

export default function quizOrder(state = [], action) {
  switch (action.type) {
    case SAVE_QUIZ_ORDER: {
      return action.quizOrder;
    }
    default:
      return state;
  }
}
