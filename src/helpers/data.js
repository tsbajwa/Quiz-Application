// How data will look in redux

export const data = {
  uuid: "String",
  isFetching: false,
  error: "",
  lastUpdated: "",
  currentQuestionIndex: 0,
  lastUnansweredQuestionIndex: 4,
  quizOrder: ["key1", "key2", "key3"],
  currentQuiz: {
    12313: {
      questionText: "Question One peeps",
      answer: "Correct answer",
      questionid: 12313,
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
      questionid: 134123,
      answerSelected: null,
      questionNumber: 2,
      answerOptions: {
        1: "Option 1",
        2: "Option 2",
        3: "Correct answer",
      },
    },
  },
  questions: {
    123123: {
      question: "This is the first q",
      answer: "Correct answer",
      uuid: "string",
      answerOptions: {
        1: "Option 1",
        2: "Option 2",
        3: "Correct answer",
      },
    },
    4324234: {
      question: "This is the seccxvond q",
      answer: "Correct",
      answerOptions: {
        1: "Option 1",
        2: "Correct",
        3: "Not answer",
      },
    },
    12312312: {
      question: "This asdis the third q",
      answer: "Correct",
      answerOptions: {
        1: "Option 1",
        2: "Correct",
        3: "Not answer",
      },
    },
    1123123: {
      question: "This iasds the fourth q",
      answer: "Correct",
      answerOptions: {
        1: "Option 1",
        2: "Correct",
        3: "Not answer",
      },
    },
  },
};
