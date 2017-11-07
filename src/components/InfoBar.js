import React from "react";

export default function InfoBar(props) {
  return (
    <div className="infoBar__container">
      <div>
        <p>Citizenship Quiz</p>
      </div>
      <div>
        <p>
          Question {props.currentQuestion} of {props.totalQuestions}
        </p>
      </div>
    </div>
  );
}
