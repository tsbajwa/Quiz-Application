import React from "react";
import { Quiz } from "../components";
import { InfoBarContainer, QuizButtonContainer } from "../containers";
import { connect } from "react-redux";

class QuizContainer extends React.Component {
  handleClick = selectedAnswer => {
    this.checkAnswer(selectedAnswer);
    //Add answer to currentQuiz, currentQuestion
  };

  checkAnswer = selectedAnswer => {
    //Should check if already answered first i.e if this.props.answer ===''?
    const correctAnswer = this.props.answer;
    //Got to change the styling for correct/incorrect answer
    if (selectedAnswer === correctAnswer) {
      console.log("You got the correct answer");
    } else {
      console.log("Sorry wrong answer");
    }
  };

  render() {
    const answerArray = Object.entries(this.props.answerOptions).map(
      arr => arr[1]
    );
    return (
      <div>
        <InfoBarContainer />
        <Quiz
          answerArray={answerArray}
          questionText={this.props.questionText}
          onClick={this.handleClick}
        />
        <QuizButtonContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
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
  };
};

export default connect(mapStateToProps)(QuizContainer);
