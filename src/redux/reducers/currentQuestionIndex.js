import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_CURRENT_Q_INDEX } from "../types";

export default function currentQuestionIndex(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case RESET_CURRENT_Q_INDEX:
      return 0;
    default:
      return state;
  }
}
