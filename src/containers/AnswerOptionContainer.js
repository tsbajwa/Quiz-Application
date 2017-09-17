import React from "react";
import { connect } from "react-redux";
import { AnswerOption } from "../components";
import { addAnswer, updateIndex } from "../redux/actions";

class AnswerOptionContainer extends React.Component {
  //componenthasmounted - need to do initial check -checkAnswer function
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
      this.props.updateIndex(this.props.currentIndex);
      this.checkAnswer();
    }
  };

  checkAnswer = () => {
    console.log("answer");
    //answer selected is current one. If so update red/green
    //answer === current one --> mark green
    //selected answer === answer (already marked green)
    //selected answer === this answer =/ actual answer => make red
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
  const currentIndex = state.currentQuestionIndex;
  return {
    questionKey,
    questionObject,
    currentIndex,
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

export default connect(mapStateToProps, mapDispatchToProps)(
  AnswerOptionContainer
);
