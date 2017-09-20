import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  QuizContainer,
  AuthenticateContainer,
  ProfileContainer,
  NavBarContainer,
} from "../containers";

export const Routes = () => (
  <Router>
    <div>
      <NavBarContainer />
      <Route exact path="/" component={QuizContainer} />
      <Route path="/auth" component={AuthenticateContainer} />
      <Route path="/profile" component={ProfileContainer} />
    </div>
  </Router>
);
