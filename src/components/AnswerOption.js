import React from "react";

export default function AnswerOption(props) {
  let className = "answerText__container";
  if (props.answerSelected !== "") {
    if (props.answer === props.answerText) {
      className = "answerText__container--green";
    }
    if (props.answerSelected === props.answerText && props.answerText !== props.answer) {
      className = "answerText__container--red";
    }
  }
  return (
    <div className={className} onClick={() => props.onClick(props.answerText)}>
      <p>{props.answerText}</p>
    </div>
  );
}
