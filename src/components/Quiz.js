import React from "react";
import { AnswerOptionContainer } from "../containers";

export default function Quiz({ questionText, answerArray }) {
  return (
    <div>
      <div>{questionText}</div>
      {answerArray.map(answerText => (
        <AnswerOptionContainer answerText={answerText} />
      ))}
    </div>
  );
}
