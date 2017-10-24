import React from "react";

export default function InfoBar(props) {
  return (
    <div className="infoBar__container">
      <div>
        <p>Quiz Name</p>
      </div>
      <div>
        <p>
          Question {props.currentQuestion} of {props.totalQuestions}
        </p>
      </div>
    </div>
  );
}
