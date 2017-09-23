import React from "react";
import { Authenticate } from "../components";
import { connect } from "react-redux";
import { fetchAndHandleAuthedUser } from "../redux/actions";
import { Redirect } from "react-router-dom";
class AuthenticateContainer extends React.Component {
  handleAuth = e => {
    e.preventDefault();
    this.props.fetchAndHandleAuthedUser();
  };

  render() {
    if (this.props.isAuthed) {
      return <Redirect to="/quiz" />;
    }
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
  const { isFetching, error, isAuthed } = state.user;
  return {
    isFetching,
    error,
    isAuthed,
  };
};
export default connect(mapStatetoProps, mapDispatchtoState)(AuthenticateContainer);
