import React from "react";
import { connect } from "react-redux";
import { Logout } from "../components";
import { logOutAndUnAuth } from "../redux/actions";

class LogoutContainer extends React.Component {
  componentDidMount() {
    this.props.logOutAndUnAuth();
  }
  render() {
    return <Logout />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOutAndUnAuth: () => dispatch(logOutAndUnAuth()),
  };
};
export default connect(null, mapDispatchToProps)(LogoutContainer);
