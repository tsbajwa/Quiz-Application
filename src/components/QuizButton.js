import React from "react";
import { Button } from "../components";

export default function QuizButton(props) {
  //TODO: Change 'Next' to 'Finish' when done and change onClick Method
  const showPrevBtn = props.currentQuestionIndex === 0 ? false : true;
  const showNextBtn = props.currentQuestionIndex > props.lastAnsweredQuestionIndex ? false : true;
  return (
    <div>
      {showPrevBtn ? <Button text="Previous" onClick={props.handlePreviousButtonClick} /> : null}

      {showNextBtn ? <Button text="Next" onClick={props.handleNextButtonClick} /> : null}
    </div>
  );
}
