import {
  saveCurrentQuiz,
  saveQuizOrder,
  resetCurrentQIndex,
  resetLastAnsweredQIndex,
} from "../redux/actions";

export function generateAndSaveQuiz(questions, quizLength = 10) {
  return dispatch => {
    const questionKeyArray = Object.keys(questions).filter(
      key => key !== "isFetching" && key !== "error"
    );
    const shuffledQuestionKeys = shuffleArray(questionKeyArray);
    const quizKeys = shuffledQuestionKeys.slice(0, quizLength);
    dispatch(saveQuizOrder(quizKeys));
    const currentQuiz = {};
    quizKeys.map(key => {
      currentQuiz[key] = { ...questions[key], answerSelected: "" };
    });
    dispatch(saveCurrentQuiz(currentQuiz));
    dispatch(resetCurrentQIndex());
    dispatch(resetLastAnsweredQIndex());
  };
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//rename file to helper functions
