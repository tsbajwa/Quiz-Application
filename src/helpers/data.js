// How data will look in redux

export default (data = {
  questions: {
    12312: {
      question: "This is the first q",
      answer: "Correct answer",
      answerOptions: {
        1: "Option 1",
        2: "Option 2",
        3: "Correct answer",
      },
    },
    1231242: {
      question: "This is the second q",
      answer: "Correct",
      answerOptions: {
        1: "Option 1",
        2: "Correct",
        3: "Not answer",
      },
    },
  },
});
