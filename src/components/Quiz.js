import React from "react";
import { AnswerOptionContainer } from "../containers";

export default function Quiz({ questionText, answerArray }) {
  return (
    <div>
      <div>{questionText}</div>
      {answerArray.map((answerText, index) => (
        <AnswerOptionContainer answerText={answerText} key={index} />
      ))}
    </div>
  );
}
