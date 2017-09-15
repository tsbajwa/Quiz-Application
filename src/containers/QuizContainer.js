import React from "react";
import { Quiz, InfoBar, Button } from "../components";
import { data } from "../helpers/data";
import { connect } from "react-redux";

class QuizContainer extends React.Component {
  handleClick = selectedAnswer => {
    this.checkAnswer(selectedAnswer);
    //Add answer to currentQuiz, currentQuestion
  };

  checkAnswer = selectedAnswer => {
    const correctAnswer = this.props.answer;
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
    console.log(this.props);
    const answerArray = Object.entries(this.props.answerOptions).map(
      arr => arr[1]
    );
    return (
      <div>
        <InfoBar
          currentQuestion={this.props.currentQuestionNumber}
          totalQuestions={this.props.quizlength}
        />
        <Quiz
          answerArray={answerArray}
          questionText={this.props.questionText}
          onClick={this.handleClick}
        />
        <Button text="Previous" onClick={this.handlePreviousButtonClick} />
        <Button text="Next" onClick={this.handleNextButtonClick} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const quizlength = state.quizOrder.length;
  const currentQuestionNumber = state.currentQuestionIndex + 1;
  const questionKey = state.quizOrder[state.currentQuestionIndex];
  const questionObject = state.currentQuiz[questionKey];
  const {
    questionText,
    answer,
    answerOptions,
    answerSelected,
  } = questionObject;

  return {
    questionText,
    answerOptions,
    answerSelected,
    answer,
    currentQuestionNumber,
    quizlength,
  };
}
export default connect(mapStateToProps)(QuizContainer);
