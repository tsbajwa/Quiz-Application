import React from "react";

export default function QuizResult(props) {
  return (
    <div>
      <p>{`You got ${props.correctQuestionCount} out of ${props.totalQuestions} right`}</p>
      {props.passed ? <p>Congrats you passed the test</p> : <p>Sorry you did not pass the test</p>}

      <h4>Ensure you pass</h4>
      <p>Get access to audio and printable flashcards. </p>
    </div>
  );
}
