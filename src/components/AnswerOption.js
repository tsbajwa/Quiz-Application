import React from "react";

export default function AnswerOption(props) {
  let className = "answerOption__container";
  if (props.answerSelected !== "") {
    if (props.answer === props.answerOption) {
      className = "answerOption__container--green";
    }
    if (props.answerSelected === props.answerOption && props.answerOption !== props.answer) {
      className = "answerOption__container--red";
    }
  }
  return (
    <div className={className} onClick={() => props.onClick(props.answerOption)}>
      <p>{props.answerOption}</p>
    </div>
  );
}
