import React from "react";
import { connect } from "react-redux";
import { QuizButton } from "../components";
import { prevQuestion, nextQuestion } from "../redux/actions";

class QuizButtonContainer extends React.Component {
  handlePreviousButtonClick = () => {
    this.props.prevQuestion();
  };

  handleNextButtonClick = () => {
    this.props.nextQuestion();
  };

  render() {
    return (
      <QuizButton
        handlePreviousButtonClick={this.handlePreviousButtonClick}
        handleNextButtonClick={this.handleNextButtonClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  nextQuestion: () => dispatch(nextQuestion()),
  prevQuestion: () => dispatch(prevQuestion()),
});

export default connect(null, mapDispatchToProps)(QuizButtonContainer);
