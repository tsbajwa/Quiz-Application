import React from "react";
import { QuizResult } from "../components";
import { connect } from "react-redux";

class QuizResultContainer extends React.Component {
  state = {
    correctQuestionCount: null,
    totalQuestions: this.props.quizOrder.length,
    passed: null,
  };

  componentDidMount() {
    this.calculateResult();
  }
  calculateResult = () => {
    const correctQuestionCount = this.findCorrectQuestionCount();
    const passed = this.passCheck(correctQuestionCount);
    this.setState({
      correctQuestionCount,
      passed,
    });
  };

  passCheck = correctQuestionCount => {
    if (correctQuestionCount / this.state.totalQuestions < 0.6) {
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
    return (
      <QuizResult
        correctQuestionCount={this.state.correctQuestionCount}
        totalQuestions={this.state.totalQuestions}
        passed={this.state.passed}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentQuiz: state.currentQuiz,
    quizOrder: state.quizOrder,
  };
};

export default connect(mapStateToProps)(QuizResultContainer);
