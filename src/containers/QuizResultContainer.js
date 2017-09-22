import React from "react";
import { QuizResult } from "../components";
import { connect } from "react-redux";

class QuizResultContainer extends React.Component {
  state = {
    correctQuestionCount: null,
    passed: null,
  };

  componentDidMount() {
    this.calculateAndSaveResult();
  }
  calculateAndSaveResult = () => {
    const correctQuestionCount = this.findCorrectQuestionCount();
    const passed = this.passCheck(correctQuestionCount);
    this.setState({
      correctQuestionCount,
      passed,
    });
    // Function to save this to firebase later
  };

  passCheck = correctQuestionCount => {
    if (correctQuestionCount / this.props.totalQuestions < 0.6) {
      return false;
    } else {
      return true;
    }
  };

  findCorrectQuestionCount = () => {
    let correctQuestionCount = 0;
    const { quizOrder, currentQuiz } = this.props;
    quizOrder.map(key => {
      if (currentQuiz[key].answerSelected === currentQuiz[key].answer) {
        correctQuestionCount++;
      }
    });
    return correctQuestionCount;
  };

  render() {
    console.log(this.state);
    return (
      <QuizResult
        correctQuestionCount={this.state.correctQuestionCount}
        totalQuestions={this.props.totalQuestions}
        passed={this.state.passed}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentQuiz: state.currentQuiz,
    totalQuestions: state.quizOrder.length,
    quizOrder: state.quizOrder,
  };
};

export default connect(mapStateToProps)(QuizResultContainer);
