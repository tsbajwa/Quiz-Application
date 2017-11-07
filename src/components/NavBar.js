import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  const blockName = props.width > 500 ? "navWide" : "navMobile";
  return (
    <nav>
      <div className={blockName}>
        <div className="nav__brand">
          <Link className="nav__brand--link" to="/">
            <span className="nav__brand--name">Brand Name</span>
          </Link>
        </div>
        <div>
          {blockName === "navMobile" ? <i onClick={props.handleMenuToggle}>Hey Hey</i> : null}
          {props.renderNavLinks(blockName)}
        </div>
      </div>
    </nav>
  );
}

//Send the prop back up
