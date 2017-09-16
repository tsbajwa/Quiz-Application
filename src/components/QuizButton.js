import React from "react";
import { Button } from "../components";

export default function QuizButton(props) {
  return (
    <div>
      <Button text="Previous" onClick={props.handlePreviousButtonClick} />
      <Button text="Next" onClick={props.handleNextButtonClick} />
    </div>
  );
}
