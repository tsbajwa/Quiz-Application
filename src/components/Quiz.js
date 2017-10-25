import React from "react";
import { AnswerOptionContainer, InfoBarContainer, QuizButtonContainer } from "../containers";

export default function Quiz({ questionText, answerArray }) {
  return (
    <div className="quiz__container">
      <InfoBarContainer />
      <p>{questionText}</p>
      {answerArray.map((answerOption, index) => (
        <AnswerOptionContainer answerOption={answerOption} key={index} />
      ))}
      <QuizButtonContainer />
    </div>
  );
}
