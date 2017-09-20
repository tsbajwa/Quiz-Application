import React from "react";

export default function NavBar(props) {
  return (
    <div>
      <h3>Logo</h3>
      {props.isAuthed ? (
        <div>
          <button>Take Quiz</button>
          <button>Profile</button>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <button>Take Quiz</button>
          <button>Login</button>
        </div>
      )}
    </div>
  );
}
