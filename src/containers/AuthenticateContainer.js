import React from "react";
import { Authenticate } from "../components";
import { connect } from "react-redux";
import { fetchAndHandleAuthedUser } from "../redux/actions";

class AuthenticateContainer extends React.Component {
  handleAuth = e => {
    e.preventDefault();
    this.props.fetchAndHandleAuthedUser().then(() => {
      console.log("Function continuing");
      //TODO: Route to another page after succesful login
    });
  };

  render() {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth}
      />
    );
  }
}

const mapDispatchtoState = dispatch => {
  return {
    fetchAndHandleAuthedUser: () => dispatch(fetchAndHandleAuthedUser()),
  };
};

const mapStatetoProps = state => {
  const { isFetching, error } = state.user;
  return {
    isFetching,
    error,
  };
};
export default connect(mapStatetoProps, mapDispatchtoState)(AuthenticateContainer);
