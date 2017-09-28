import React from "react";
import { FacebookAuthButton } from "../components";

export default function Authenticate({ error, isFetching, onAuth }) {
  return (
    <div>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p>{error}</p> : null}
    </div>
  );
}
