import React from 'react';


export default function AnswerOption(props) {
  return (
    <div onClick = {() => props.onClick(props.answerText)}>
      <p>{props.answerText}</p>
    </div>
  )
}