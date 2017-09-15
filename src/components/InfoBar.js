import React from 'react';

export default function InfoBar(props) {
  return (
    <div>
      <div>
        <p>More Information</p>
      </div>
      <div>
        Question {props.currentQuestion} of {props.totalQuestions}
      </div>
    </div>
  )
}