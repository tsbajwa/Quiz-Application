import React from "react";

export default function FacebookAuthButton({ onAuth, isFetching }) {
  return (
    <button onClick={onAuth}>{isFetching === true ? "Loading" : "Login With Facebook"}</button>
  );
}
