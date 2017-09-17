import { UPDATE_LAST_ANSWERED_Q_INDEX } from "../types";

export default function lastAnsweredQuestionIndex(state = null, action) {
  switch (action.type) {
    case UPDATE_LAST_ANSWERED_Q_INDEX: {
      return action.index;
    }
    default:
      return state;
  }
}
