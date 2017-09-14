import React from "react";
import { Quiz } from "../components";

export default class QuizContainer extends React.Component {
  handleClick = selectedAnswer => {
    this.checkAnswer(selectedAnswer);
  };

  checkAnswer = selectedAnswer => {
    const correctAnswer = "Correct answer";
    if (selectedAnswer === correctAnswer) {
      console.log("You got the correct answer");
    } else {
      console.log("Sorry wrong answer");
    }
  };
  render() {
    const question = {
      questionText: "This is the first q",
      answer: "Correct answer",
      answerOptions: {
        1: "Option 1",
        2: "Option 2",
        3: "Correct answer",
      },
    };

    const answerArray = Object.entries(question.answerOptions).map(
      answerArray => answerArray[1]
    );
    const questionText = question.questionText;
    return (
      <div>
        <div>
          <p>Click here for more information</p>
          <p>Question 5 of 10 </p>
        </div>
        <Quiz
          answerArray={answerArray}
          questionText={questionText}
          onClick={this.handleClick}
        />
        <p>Next button for next question</p>
      </div>
    );
  }
}
