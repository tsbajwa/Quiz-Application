import React from "react";
import { QuizButtonRender } from "../components";
import { Link } from "react-router-dom";
export default class QuizButton extends React.Component {
  renderButtons = () => {
    const showPrevBtn = this.props.currentQuestionIndex === 0 ? false : true;
    const showNextBtn =
      this.props.currentQuestionIndex > this.props.lastAnsweredQuestionIndex ? false : true;
    const quizFinished =
      this.props.lastAnsweredQuestionIndex + 1 === this.props.quizLength ? true : false;

    if (quizFinished) {
      //Can add in previous button here still
      return (
        <div>
          <Link to="/results">See Results</Link>
        </div>
      );
    } else {
      return (
        <div className="quizButton__container">
          <QuizButtonRender
            enableButton={showPrevBtn}
            className="quizButton__btn--prev"
            onClick={this.props.handlePreviousButtonClick}
            text="Previous"
          />
          {showNextBtn ? (
            <QuizButtonRender
              enableButton={showNextBtn}
              className="quizButton__btn--next"
              text="Next"
              onClick={this.props.handleNextButtonClick}
            />
          ) : null}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}
