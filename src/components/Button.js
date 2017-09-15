import React from "react";

export default function Button(props) {
  //if reach array.length no next button
  //Next button only comes after selection made
  return <button onClick={props.onClick}>{props.text}</button>;
}
