import React from "react";
import { connect } from "react-redux";
import { InfoBar } from "../components";

class InfoBarContainer extends React.Component {
  render() {
    return (
      <InfoBar
        currentQuestion={this.props.currentQuestionNumber}
        totalQuestions={this.props.quizlength}
      />
    );
  }
}

const mapStateToProps = state => {
  const quizlength = state.quizOrder.length;
  const currentQuestionNumber = state.currentQuestionIndex + 1;

  return {
    quizlength,
    currentQuestionNumber,
  };
};
export default connect(mapStateToProps)(InfoBarContainer);
