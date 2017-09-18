import React from "react";

export default function AnswerOption(props) {
  let check = null;
  if (props.answerSelected !== "") {
    if (props.answer === props.answerText) {
      check = "Correct";
    }
    if (props.answerSelected === props.answerText && props.answerText !== props.answer) {
      check = "Incorrect";
    }
  }
  return (
    <div onClick={() => props.onClick(props.answerText)}>
      <p>
        {props.answerText}
        {check}
      </p>
    </div>
  );
}
