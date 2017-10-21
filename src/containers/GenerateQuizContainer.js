import React from "react";
import { QuizContainer } from "../containers";
import { generateAndSaveQuiz } from "../helpers/quiz";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions";
class GenerateQuizContainer extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // isFetching and error property are on questions object by default
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
    return <div>{this.state.loading ? "Generating Quiz" : <QuizContainer />}</div>;
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
export default connect(mapStateToProps, mapDispatchToProps)(GenerateQuizContainer);
