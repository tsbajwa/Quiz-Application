import React from "react";

export default function Profile({ name, orderedWrongAnswerCount, questions }) {
  const results = orderedWrongAnswerCount.map((keyArr, index) => {
    const key = keyArr[0];
    const keyValue = keyArr[1];
    return (
      <div key={index}>
        <p>Times answered Wrong: {keyValue}</p>
        <p>Question: {questions[key].question}</p>
        <p>Correct Answer: {questions[key].answer}</p>
      </div>
    );
  });

  return (
    <div>
      <h2> Hi {name}, see the questions you have gotten wrong the most often below </h2>
      {results}
    </div>
  );
}
