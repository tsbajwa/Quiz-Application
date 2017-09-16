import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../types";

export function nextQuestion() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function prevQuestion() {
  return {
    type: DECREMENT_COUNTER,
  };
}
