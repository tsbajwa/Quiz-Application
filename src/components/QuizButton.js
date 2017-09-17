import React from "react";
import { Button } from "../components";

export default function QuizButton(props) {
  return (
    <div>
      {props.showPreviousBtn ? (
        <Button text="Previous" onClick={props.handlePreviousButtonClick} />
      ) : null}

      {props.showNextBtn ? (
        <Button text="Next" onClick={props.handleNextButtonClick} />
      ) : null}
      <Button text="Prev permBtn" onClick={props.handlePreviousButtonClick} />
      <Button text="Next permBtn" onClick={props.handleNextButtonClick} />
    </div>
  );
}
