const initialState = {
  12313: {
    questionText: "Question One peeps",
    answer: "Correct answer",
    questionid: "asdasdad",
    answerSelected: null,
    questionNumber: 1,
    answerOptions: {
      1: "Option 1",
      2: "Option 2",
      3: "Correct answer",
    },
  },
  134123: {
    questionText: "Question two peeps",
    answer: "Correct answer",
    questionid: "asdasasdd",
    answerSelected: null,
    questionNumber: 2,
    answerOptions: {
      1: "Option 1",
      2: "Option 2",
      3: "Correct answer",
    },
  },
};

export default function currentQuiz(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
