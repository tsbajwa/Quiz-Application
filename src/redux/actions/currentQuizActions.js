import { ADD_ANSWER } from "../types";

export function addAnswer(answer, questionKey, questionObject) {
  return {
    type: ADD_ANSWER,
    answer,
    questionKey,
    questionObject,
  };
}

// current Key
//key.answer = answer

//answer is a prop
//questionKey is state
