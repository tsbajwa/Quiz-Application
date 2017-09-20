import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <h3>Logo</h3>
      {props.isAuthed ? (
        <div>
          <button>Take Quiz</button>
          <button>Profile</button>
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div>
          <button>Take Quiz</button>
          <button>Login</button>
          <Link to="/logout">Logout</Link>
        </div>
      )}
    </div>
  );
}
