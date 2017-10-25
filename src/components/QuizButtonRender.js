import React from "react";

export default function QuizButtonRender(props) {
  return (
    <div>
      {props.enableButton ? (
        <button className={props.className} type="button" onClick={props.onClick}>
          {props.text}
        </button>
      ) : (
        <button className="quizButton__btn--disabled" type="button" disabled>
          {props.text}
        </button>
      )}
    </div>
  );
}
