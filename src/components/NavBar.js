import React from "react";
import { Link } from "react-router-dom";
import FaBars from "react-icons/lib/fa/bars";

export default function NavBar(props) {
  const blockName = props.width > 500 ? "navWide" : "navMobile";
  return (
    <nav className={blockName}>
      <div className="nav-container">
        <div className="nav__brand">
          <Link className="nav__brand--link" to="/">
            <span className="nav__brand--name">Brand Name</span>
          </Link>
        </div>
        <div className="nav__icon">
          {blockName === "navMobile" ? (
            <FaBars color="white" size={30} onClick={props.handleMenuToggle} />
          ) : null}
        </div>
      </div>
      {props.renderNavLinks(blockName)}
    </nav>
  );
}
