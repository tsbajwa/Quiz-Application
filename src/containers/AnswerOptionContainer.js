import React from "react";
import { connect } from "react-redux";
import { AnswerOption } from "../components";
import { addAnswer } from "../redux/actions";

class AnswerOptionContainer extends React.Component {
  handleClick = () => {
    this.updateIfUnanswered();
  };
  updateIfUnanswered = () => {
    if (this.props.questionObject.answerSelected === "") {
      this.props.updateAnswer(
        this.props.answerText,
        this.props.questionKey,
        this.props.questionObject
      );
    }
  };

  render() {
    return (
      <AnswerOption
        onClick={this.handleClick}
        answerText={this.props.answerText}
      />
    );
  }
}

const mapStateToProps = state => {
  const questionKey = state.quizOrder[state.currentQuestionIndex];
  const questionObject = state.currentQuiz[questionKey];
  return {
    questionKey,
    questionObject,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAnswer: (answer, questionKey, questionObject) => {
      dispatch(addAnswer(answer, questionKey, questionObject));
    },
  };
};
//onClick method --> update answer in state, check if answer correct, change style based on answer

export default connect(mapStateToProps, mapDispatchToProps)(
  AnswerOptionContainer
);
