import React from "react";
import { NavBar } from "../components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authedLinks, unAuthedLinks } from "../config/nav";

class NavBarContainer extends React.Component {
  state = {
    width: window.innerWidth,
    menuOpen: false,
  };

  handleScreenResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleScreenResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleScreenResize);
  }

  renderNavLinks = blockName => {
    const links = this.props.isAuthed ? authedLinks : unAuthedLinks;
    const ulClassName = this.state.menuOpen ? `${blockName}__ul--open` : `${blockName}__ul`;
    return (
      <div className={ulClassName}>
        {links.map((link, index) => {
          const onClickFn = this.state.width > 500 ? null : this.handleMenuToggle;
          return (
            <NavLink to={link.path} onClick={onClickFn} className={`${blockName}__li`} key={index}>
              {link.label}
            </NavLink>
          );
        })}
      </div>
    );
  };

  handleMenuToggle = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen };
    });
  };
  render() {
    return (
      <NavBar
        renderNavLinks={this.renderNavLinks}
        width={this.state.width}
        handleMenuToggle={this.handleMenuToggle}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.user.isAuthed,
  };
};
export default connect(mapStateToProps)(NavBarContainer);
