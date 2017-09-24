import React from "react";
import { connect } from "react-redux";
import { generateAndSaveQuiz } from "../helpers/quiz";
import { Link } from "react-router-dom";
class QuizGeneratorContainer extends React.Component {
  handleButtonClick = () => {
    this.props.generateAndSaveQuiz(this.props.questions);
    console.log("Function ran ");
  };

  render() {
    return (
      <Link to="/quiz" onClick={this.handleButtonClick}>
        Generate Quiz
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generateAndSaveQuiz: questions => dispatch(generateAndSaveQuiz(questions)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizGeneratorContainer);

// Quiz size functionality to be added still
