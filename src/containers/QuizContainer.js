import React from "react";
import { Quiz } from "../components";
import { InfoBarContainer, QuizButtonContainer } from "../containers";
import { connect } from "react-redux";

class QuizContainer extends React.Component {
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
        />
        <QuizButtonContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const questionKey = state.quizOrder[state.currentQuestionIndex];
  const questionObject = state.currentQuiz[questionKey];
  const { questionText, answerOptions } = questionObject;

  return {
    questionText,
    answerOptions,
  };
};

export default connect(mapStateToProps)(QuizContainer);
