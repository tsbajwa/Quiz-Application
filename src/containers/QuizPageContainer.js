import React from "react";
import { QuizPage } from "../components";
import { generateAndSaveQuiz } from "../helpers/quiz";
import { connect } from "react-redux";
class QuizPageContainer extends React.Component {
  componentDidMount() {
    this.props.generateAndSaveQuiz(this.props.questions);
  }

  render() {
    return <QuizPage />;
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
export default connect(mapStateToProps, mapDispatchToProps)(QuizPageContainer);
