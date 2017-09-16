import { ADD_ANSWER } from "../types";

export function addAnswer(answer, questionKey, questionObject) {
  return {
    type: ADD_ANSWER,
    answer,
    questionKey,
    questionObject,
  };
}
