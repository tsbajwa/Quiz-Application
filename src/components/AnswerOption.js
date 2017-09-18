import React from "react";

export default function AnswerOption(props) {
  let check = null;
  if (props.answerSelected === props.answerText) {
    if (props.answerSelected === props.answer) {
      check = "CORRECT";
    } else {
      check = "INCORRECT";
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
