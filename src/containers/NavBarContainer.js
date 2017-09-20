import React from "react";
import { NavBar } from "../components";
import { logout } from "../helpers/auth";
import { connect } from "react-redux";

class NavBarContainer extends React.Component {
  render() {
    return <NavBar onClick={logout} isAuthed={this.props.isAuthed} />;
  }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.user.isAuthed,
  };
};
export default connect(mapStateToProps)(NavBarContainer);
