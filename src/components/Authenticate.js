import React from "react";
import { FacebookAuthButton } from "../components";

export default function Authenticate({ error, isFetching, onAuth }) {
  return (
    <div>
      <h1>Authenticate Container</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p>{error}</p> : null}
    </div>
  );
}