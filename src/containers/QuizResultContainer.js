import React from "react";
import { QuizResult } from "../components";
import { connect } from "react-redux";
import { passCheck } from "../helpers/quiz";
import { fetchUpdateAndSaveAnswerCount } from "../helpers/api";
class QuizResultContainer extends React.Component {
  state = {
    correctQuestionCount: null,
    passedQuiz: null,
  };

  componentDidMount() {
    this.calculateAndSaveResult();
  }
  calculateAndSaveResult = () => {
    const answersChecked = this.recordAndCountResult();
    const correctQuestionCount = answersChecked[0];
    const passedQuiz = passCheck(correctQuestionCount, this.props.totalQuestions);
    this.setState({
      correctQuestionCount,
      passedQuiz,
    });
    if (this.props.uid !== "") {
      const recordOfQuestionsAnsweredCorrectly = answersChecked[1];
      this.saveResult(this.props.uid, recordOfQuestionsAnsweredCorrectly);
    }
  };

  saveResult = (uid, currentResult) => {
    fetchUpdateAndSaveAnswerCount(uid, currentResult);
  };
  recordAndCountResult = () => {
    let correctAnswerCount = 0;
    const recordOfQuestionsAnsweredCorrectly = {};
    const { quizOrder, currentQuiz } = this.props;
    quizOrder.map(key => {
      if (currentQuiz[key].answerSelected === currentQuiz[key].answer) {
        correctAnswerCount++;
        recordOfQuestionsAnsweredCorrectly[key] = true;
      } else {
        recordOfQuestionsAnsweredCorrectly[key] = false;
      }
    });
    return [correctAnswerCount, recordOfQuestionsAnsweredCorrectly];
  };

  render() {
    return (
      <QuizResult
        correctQuestionCount={this.state.correctQuestionCount}
        totalQuestions={this.props.totalQuestions}
        passed={this.state.passedQuiz}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentQuiz: state.currentQuiz,
    totalQuestions: state.quizOrder.length,
    quizOrder: state.quizOrder,
    uid: state.user.authedId,
  };
};

export default connect(mapStateToProps)(QuizResultContainer);
