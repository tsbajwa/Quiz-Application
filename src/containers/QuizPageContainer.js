import React from "react";
import { QuizPage } from "../components";
import { generateAndSaveQuiz } from "../helpers/quiz";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions";
class QuizPageContainer extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // Accounting for isFetching and error property on questions object
    if (Object.keys(this.props.questions).length < 3) {
      this.props.getQuestions().then(questions => {
        this.props.generateAndSaveQuiz(questions);
        this.setState({
          loading: false,
        });
      });
    } else {
      this.props.generateAndSaveQuiz(this.props.questions);
      this.setState({
        loading: false,
      });
    }
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
    getQuestions: () => dispatch(getQuestions()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizPageContainer);
