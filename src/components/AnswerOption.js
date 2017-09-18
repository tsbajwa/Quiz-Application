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

  // if (props.answerSelected === props.answerText) {
  //   if (props.answerSelected === props.answer) {
  //     check = "CORRECT";
  //   } else {
  //     check = "INCORRECT";
  //   }
  // }
  return (
    <div onClick={() => props.onClick(props.answerText)}>
      <p>
        {props.answerText}
        {check}
      </p>
    </div>
  );
}

//Need to highlight correct answer
// if props.answerSelected !== ''
//if prop.answerSelected === props.answer
//check Correct
