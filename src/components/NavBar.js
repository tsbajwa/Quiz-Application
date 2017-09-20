import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <h3>Logo</h3>
      {props.isAuthed ? (
        <div>
          <button>Take Quiz</button>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div>
          <button>Take Quiz</button>
          <Link to="/Auth">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </div>
      )}
    </div>
  );
}
