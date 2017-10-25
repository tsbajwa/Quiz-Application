import React from "react";
import { connect } from "react-redux";
import { AnswerOption } from "../components";
import { addAnswer, updateIndex } from "../redux/actions";

class AnswerOptionContainer extends React.Component {
  handleClick = () => {
    this.updateIfUnanswered();
  };
  updateIfUnanswered = () => {
    if (this.props.questionObject.answerSelected === "") {
      this.props.updateAnswer(
        this.props.answerOption,
        this.props.questionKey,
        this.props.questionObject
      );
      this.props.updateIndex(this.props.currentIndex);
    }
  };

  render() {
    return (
      <AnswerOption
        onClick={this.handleClick}
        answerOption={this.props.answerOption}
        answerSelected={this.props.answerSelected}
        answer={this.props.answer}
      />
    );
  }
}

const mapStateToProps = state => {
  const questionKey = state.quizOrder[state.currentQuestionIndex];
  const questionObject = state.currentQuiz[questionKey];
  const { answerSelected, answer } = questionObject;
  const currentIndex = state.currentQuestionIndex;
  return {
    questionKey,
    questionObject,
    currentIndex,
    answerSelected,
    answer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAnswer: (answer, questionKey, questionObject) => {
      dispatch(addAnswer(answer, questionKey, questionObject));
    },
    updateIndex: index => dispatch(updateIndex(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptionContainer);
