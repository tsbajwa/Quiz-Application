import React from "react";
import { GenerateQuizContainer } from "../containers";

export default function QuizPage() {
  return (
    <div className="quizPage__container">
      <h2>US Citizenship Practice Quiz</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo ligula, dictum sit
        amet consequat in, elementum eget elit. Etiam auctor augue tortor, eu sodales neque dapibus
        a. Fusce eu eros vitae felis molestie tristique. Maecenas sit amet ante porta, pulvinar mi
        id, commodo ligula.
      </p>
      <GenerateQuizContainer />
    </div>
  );
}
