import React from "react";
import { Quiz, InfoBar, Button } from "../components";
import { data } from "../helpers/data";

export default class QuizContainer extends React.Component {
  handleClick = selectedAnswer => {
    this.checkAnswer(selectedAnswer);
    //Add answer to currentQuiz, currentQuestion
  };

  checkAnswer = selectedAnswer => {
    const correctAnswer = data.currentQuiz.answer;
    //Got to change the styling for correct/incorrect answer
    if (selectedAnswer === correctAnswer) {
      console.log("You got the correct answer");
    } else {
      console.log("Sorry wrong answer");
    }
  };
  handlePreviousButtonClick = () => {
    this.prevQuestion();
  };

  handleNextButtonClick = () => {
    this.nextQuestion();
  };

  prevQuestion = () => {
    console.log("Pressed Previous Question button");
  };
  nextQuestion = () => {
    //currentQuestion becomes the next question in currentQuiz
    console.log("Pressed Next Question button");
  };

  render() {
    const answerObject = data.currentQuiz.find(
      question => question.questionNumber === data.currentQuestion
    );
    const { questionText, answerOptions, questionNumber } = answerObject;
    const answerArray = Object.entries(answerOptions).map(arr => arr[1]);
    return (
      <div>
        <InfoBar
          currentQuestion={questionNumber}
          totalQuestions={data.currentQuiz.length}
        />
        <Quiz
          answerArray={answerArray}
          questionText={questionText}
          onClick={this.handleClick}
        />
        <Button text="Previous" onClick={this.handlePreviousButtonClick} />
        <Button text="Next" onClick={this.handleNextButtonClick} />
      </div>
    );
  }
}
