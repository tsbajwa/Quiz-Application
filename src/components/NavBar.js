import React from "react";
import { NavLink, Link } from "react-router-dom";
export default function NavBar({ isAuthed }) {
  return (
    <header className="nav">
      <div className="nav__brandContainer">
        <Link className="nav__brand--link" to="/">
          <span className="nav__brand--name">Brand Name</span>
        </Link>
      </div>

      <label htmlFor="unique" className="nav__accordian--label">
        &equiv;
      </label>
      <input type="checkbox" id="unique" className="nav__accordian--checkbox" />
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
