import React from "react";
import { connect } from "react-redux";
import { QuizButton } from "../components";
import { prevQuestion, nextQuestion } from "../redux/actions";

class QuizButtonContainer extends React.Component {
  state = {
    showNextBtn: false,
    showPreviousBtn: true,
    initialQuestionIndex: this.props.currentQuestionIndex,
    initialAnswerIndex: this.props.lastAnsweredQuestionIndex,
  };
  componentDidMount() {
    console.log(this.state);
    const passedState = {
      currentQuestionIndex: this.state.initialQuestionIndex,
      lastAnsweredQuestionIndex: this.state.initialAnswerIndex,
    };
    this.checkUpdatedButtonRender(passedState);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentQuestionIndex) {
      console.log("Updated Prop received", nextProps.currentQuestionIndex);
      this.checkUpdatedButtonRender({
        currentQuestionIndex: nextProps.currentQuestionIndex,
      });
    }
    if (nextProps.lastAnsweredQuestionIndex) {
      this.checkUpdatedButtonRender({
        lastAnsweredQuestionIndex: nextProps.lastAnsweredQuestionIndex,
      });
    }
  }

  checkUpdatedButtonRender = ({
    lastAnsweredQuestionIndex,
    currentQuestionIndex,
  }) => {
    console.log("Button render", currentQuestionIndex);
    console.log("Button render answeredIndex", lastAnsweredQuestionIndex);
    const questionIndex = currentQuestionIndex
      ? currentQuestionIndex
      : this.props.currentQuestionIndex;
    const answerIndex = lastAnsweredQuestionIndex
      ? lastAnsweredQuestionIndex
      : this.props.lastAnsweredQuestionIndex;

    if (questionIndex === 0) {
      this.setState({
        showPreviousBtn: false,
      });
    } else {
      this.setState({
        showPreviousBtn: true,
      });
    }
  };
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentQuestionIndex) {
  //     this.setState({
  //       currentQuestionIndex: nextProps.currentQuestionIndex,
  //     });
  //     if (nextProps.lastAnsweredQuestionIndex) {
  //       this.setState({
  //         lastAnsweredQuestionIndex: nextProps.lastAnsweredQuestionIndex,
  //       });
  //     }
  //     // console.log("Component will receive props run");
  //     // console.log("current", this.props.currentQuestionIndex);
  //     // console.log("new", nextProps.currentQuestionIndex);
  //   }
  // }

  handlePreviousButtonClick = () => {
    this.props.prevQuestion();
    //this.checkUpdatedButtonRender();
    //setTimeout(() => this.checkButtonRender(), 100); //set timeout works...async issue?
  };

  handleNextButtonClick = () => {
    this.props.nextQuestion();
    //this.checkUpdatedButtonRender();
    //setTimeout(() => this.checkButtonRender(), 100);
  };

  // checkButtonRender = () => {
  //   const { currentQuestionIndex, lastAnsweredQuestionIndex } = this.props;
  //   if (currentQuestionIndex === 0) {
  //     this.setState({
  //       showPreviousBtn: false,
  //     });
  //   } else {
  //     this.setState({
  //       showPreviousBtn: true,
  //     });
  //   }

  //   if (
  //     currentQuestionIndex > lastAnsweredQuestionIndex ||
  //     lastAnsweredQuestionIndex === null
  //   ) {
  //     this.setState({
  //       showNextBtn: false,
  //     });
  //   } else {
  //     this.setState({
  //       showNextBtn: true,
  //     });
  //   }
  //   console.log("currentQuestion", currentQuestionIndex);
  //   console.log("lastAnswered", lastAnsweredQuestionIndex);
  // };

  render() {
    return (
      <QuizButton
        handlePreviousButtonClick={this.handlePreviousButtonClick}
        handleNextButtonClick={this.handleNextButtonClick}
        showPreviousBtn={this.state.showPreviousBtn}
        showNextBtn={this.state.showNextBtn}
      />
    );
  }
}

const mapStateToProps = state => {
  const { currentQuestionIndex, lastAnsweredQuestionIndex } = state;
  return {
    currentQuestionIndex,
    lastAnsweredQuestionIndex,
  };
};

const mapDispatchToProps = dispatch => ({
  nextQuestion: () => dispatch(nextQuestion()),
  prevQuestion: () => dispatch(prevQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuizButtonContainer
);
