import React from "react";
import auth from "../helpers/auth";
import { Authenticate } from "../components";
import { connect } from "react-redux";
import { fetchingUser, fetchedUser, logError } from "../redux/actions";

class AuthenticateContainer extends React.Component {
  handleAuth = () => {
    this.props.authenticate();
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

//dispatch fetchingUser
//Run promise
//After promise resolves .then -> fetchedUser
//Workflow for error?
const mapDispatchtoState = dispatch => {
  return {
    authenticate: () => {
      dispatch(fetchingUser());
      auth()
        .then(user => {
          console.log("Autheduser", user);
          dispatch(fetchedUser(user));
        })
        .catch(error => {
          dispatch(logError(error));
        });
    },
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
