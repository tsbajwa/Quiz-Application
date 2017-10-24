import {
  saveCurrentQuiz,
  saveQuizOrder,
  resetCurrentQIndex,
  resetLastAnsweredQIndex,
} from "../redux/actions";

export function generateAndSaveQuiz(questions, quizLength = 4) {
  return dispatch => {
    const currentQuizKeys = generateQuiz(questions, quizLength);
    dispatch(saveQuizOrder(currentQuizKeys));
    dispatch(saveCurrentQuiz(getCurrentQuizQuestions(questions, currentQuizKeys)));
    dispatch(resetCurrentQIndex());
    dispatch(resetLastAnsweredQIndex());
  };
}

function generateQuiz(questions, quizLength) {
  const filteredAndShuffledQuestionKeys = getFilteredAndShuffledKeys(questions);
  const currentQuizToSize = filteredAndShuffledQuestionKeys.slice(0, quizLength);
  return currentQuizToSize;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getCurrentQuizQuestions(questions, keyArray) {
  const currentQuiz = {};
  keyArray.map(key => {
    currentQuiz[key] = { ...questions[key], answerSelected: "" };
  });
  return currentQuiz;
}

function getFilteredAndShuffledKeys(questions) {
  const questionKeyArray = Object.keys(questions).filter(
    key => key !== "isFetching" && key !== "error"
  );
  return shuffleArray(questionKeyArray);
}

export function passCheck(correctNumber, totalNumber, passRate = 0.6) {
  if (correctNumber / totalNumber < passRate) {
    return false;
  } else {
    return true;
  }
}

export function arrangeObjectKeysbyValue(object) {
  return Object.entries(object).sort((a, b) => a[1] - b[1]);
}
