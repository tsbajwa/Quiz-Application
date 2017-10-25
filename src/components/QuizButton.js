import React from "react";
import { QuizButtonRender } from "../components";
import { Link } from "react-router-dom";
export default function QuizButton(props) {
  const showPrevBtn = props.currentQuestionIndex === 0 ? false : true;
  const showNextBtn = props.currentQuestionIndex > props.lastAnsweredQuestionIndex ? false : true;
  const quizFinished = props.lastAnsweredQuestionIndex + 1 === props.quizLength ? true : false;

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
          onClick={props.handlePreviousButtonClick}
          text="Previous"
        />
        <QuizButtonRender
          enableButton={showNextBtn}
          className="quizButton__btn--next"
          text="Next"
          onClick={props.handleNextButtonClick}
        />
      </div>
    );
  }
}
