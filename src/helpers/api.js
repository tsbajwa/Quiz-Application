import { ref } from "../config/constant";

export function fetchQuestions() {
  return ref
    .child("questions")
    .once("value")
    .then(questions => {
      return questions.val();
    });
}
