import { ref } from "../config/constant";
export function fetchQuestions() {
  return ref
    .child("questions")
    .once("value")
    .then(questions => {
      return questions.val();
    });
}

export function fetchUpdateAndSaveAnswerCount(uid, currentResult) {
  fetchAnswerCount(uid).then(result => {
    const updatedCount = updateAnswerCount(result, currentResult);
    saveAnswerCount(uid, updatedCount);
  });
}

export function fetchAnswerCount(uid) {
  console.log("UID inside fetch", uid);
  return ref
    .child(`users/${uid}/answerCount`)
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
}

export function updateAnswerCount(currentResult, resultUpdate) {
  const updatedResult = currentResult || {};
  Object.keys(resultUpdate).map(key => {
    if (resultUpdate[key] === false) {
      if (updatedResult[key] === undefined) {
        updatedResult[key] = 1;
      } else {
        updatedResult[key]++;
      }
    }
  });
  return updatedResult;
}

export function saveAnswerCount(uid, data) {
  return ref.child(`users/${uid}/answerCount`).set(data);
}
