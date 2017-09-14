import React from "react";
import { AnswerOption } from "../components";

export default function Quiz({questionText, answerArray, onClick}) {
  return (
    <div>
      <div>{questionText}</div>
      {answerArray.map(answerText => (
        <AnswerOption onClick={onClick} answerText={answerText} />
      ))}
    </div>
  );
  
}
