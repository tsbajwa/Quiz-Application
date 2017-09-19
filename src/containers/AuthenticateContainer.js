import React from "react";
import auth from "../helpers/auth";
import { Authenticate } from "../components";

export default class AuthenticateContainer extends React.Component {
  handleAuth = () => {
    auth().then(user => {
      console.log("Authed User", user);
    });
  };

  render() {
    return <Authenticate isFetching={false} error="" onAuth={this.handleAuth} />;
  }
}
