import { SAVE_QUIZ_ORDER } from "../types";
const initialState = ["asdadsadasd", "adsaljdnasjda", "nasjda"];

export default function quizOrder(state = initialState, action) {
  switch (action.type) {
    case SAVE_QUIZ_ORDER: {
      return action.quizOrder;
    }
    default:
      return state;
  }
}
