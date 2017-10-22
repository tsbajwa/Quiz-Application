import React from "react";

export default function QuizResult(props) {
  return (
    <div>
      <p>{`You got ${props.correctQuestionCount} out of ${props.totalQuestions} right`}</p>
      {props.passed ? <p>Congrats you passed the test</p> : <p>Sorry you did not pass the test</p>}
    </div>
  );
}
