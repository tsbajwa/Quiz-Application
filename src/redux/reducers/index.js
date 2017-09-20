import { combineReducers } from "redux";

import currentQuiz from "./currentQuiz";
import questions from "./questions";
import quizOrder from "./quizOrder";
import currentQuestionIndex from "./currentQuestionIndex";
import lastAnsweredQuestionIndex from "./lastAnsweredQuestionIndex";
import user from "./user";

export const reducers = combineReducers({
  questions,
  currentQuiz,
  quizOrder,
  currentQuestionIndex,
  lastAnsweredQuestionIndex,
  user,
});
export { currentQuiz, questions, quizOrder, currentQuestionIndex, user, lastAnsweredQuestionIndex };
