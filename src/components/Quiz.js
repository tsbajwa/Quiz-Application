import React from "react";
import { AnswerOptionContainer } from "../containers";

export default function Quiz({ questionText, answerArray }) {
  return (
    <div className="quiz__container">
      <p>{questionText}</p>
      {answerArray.map((answerOption, index) => (
        <AnswerOptionContainer answerOption={answerOption} key={index} />
      ))}
    </div>
  );
}
