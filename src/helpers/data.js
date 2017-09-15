// How data will look in redux

export const data = {
  uuid: "String",
  isFetching: false,
  error: "",
  lastUpdated: "",
  currentQuestion: 2,
  lastUnansweredQuestion: 4,
  currentQuiz: [
    {
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
    {
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
  ],
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
