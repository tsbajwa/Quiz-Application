import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function NavBar({ isAuthed }) {
  return (
    <header className="nav">
      <Link className="nav__brand--link" to="/">
        <span className="nav__brand--name">Brand Name</span>
      </Link>
      <input type="checkbox" id="nav__accordian" class="nav__accordian--checkbox" />
      <label for="nav__accordian" class="nav__accordian--label">
        <i />
        <i />
        <i />
      </label>
      {isAuthed ? (
        <div className="nav__ul">
          <NavLink to="/quiz" className="nav__li">
            Quiz
          </NavLink>
          <NavLink to="/profile" className="nav__li">
            Profile
          </NavLink>
          <NavLink to="/logout" className="nav__li">
            Logout
          </NavLink>
        </div>
      ) : (
        <div className="nav__ul">
          <NavLink to="/quiz" className="nav__li">
            Quiz
          </NavLink>
          <NavLink to="/auth" className="nav__li">
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
}
