import React from "react";
import { GenerateQuizContainer } from "../containers";

export default function QuizPage() {
  return (
    <div className="quizPage__container">
      <h2>This is the Quiz</h2>
      <p>
        Take the quiz below. For full access to audio, text, other languages and tips buy here for
        only 50cents
      </p>
      <GenerateQuizContainer />
    </div>
  );
}
