import React from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
export default class QuizButton extends React.Component {
  renderButtons = () => {
    const showPrevBtn = this.props.currentQuestionIndex === 0 ? false : true;
    const showNextBtn =
      this.props.currentQuestionIndex > this.props.lastAnsweredQuestionIndex ? false : true;
    const quizFinished =
      this.props.lastAnsweredQuestionIndex + 1 === this.props.quizLength ? true : false;

    if (quizFinished) {
      return (
        <div>
          <Link to="/results">See Results</Link>
        </div>
      );
    } else {
      return (
        <div>
          {showPrevBtn ? (
            <Button text="Previous" onClick={this.props.handlePreviousButtonClick} />
          ) : null}

          {showNextBtn ? <Button text="Next" onClick={this.props.handleNextButtonClick} /> : null}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}
