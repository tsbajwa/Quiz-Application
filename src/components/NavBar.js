import React from "react";
import { Link } from "react-router-dom";
import QuizGeneratorContainer from "../containers/QuizGeneratorContainer";
export default function NavBar(props) {
  return (
    <div>
      <h3>Logo</h3>
      <QuizGeneratorContainer />
      {props.isAuthed ? (
        <div>
          <Link to="/quiz">Take Quiz</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div>
          <Link to="/quiz">Take Quiz</Link>
          <Link to="/Auth">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </div>
      )}
    </div>
  );
}
