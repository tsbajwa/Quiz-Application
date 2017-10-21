import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <nav>
      <h3>Logo</h3>
      <input type="checkbox" id="nav" class="hidden" />
      <label for="nav" class="nav__accordian">
        <i />
        <i />
        <i />
      </label>
      {props.isAuthed ? (
        <div class="nav">
          <ul>
            <li>
              <Link to="/quiz">Take Quiz</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div class="nav">
          <ul>
            <li>
              <Link to="/quiz">Take Quiz</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// nav-open became nav__accordian
