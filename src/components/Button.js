import React from "react";

//TODO: Not providing any value. Remove and replace component in App
export default function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
