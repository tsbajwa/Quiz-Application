import React from "react";
import { QuizPage } from "../components";
import { generateAndSaveQuiz } from "../helpers/quiz";
import { connect } from "react-redux";
class QuizPageContainer extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.generateAndSaveQuiz(this.props.questions);
    this.setState({
      loading: false,
    });
  }

  render() {
    return <div>{this.state.loading ? "Generating Quiz" : <QuizPage />}</div>;
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
