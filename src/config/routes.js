import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  QuizContainer,
  AuthenticateContainer,
  ProfileContainer,
  NavBarContainer,
  LogoutContainer,
  QuizPageContainer,
  QuizResultContainer,
} from "../containers";

export const Routes = () => (
  <Router>
    <div>
      <NavBarContainer />
      <Route exact path="/" component={QuizContainer} />
      <Route path="/quiz" component={QuizPageContainer} />
      <Route path="/auth" component={AuthenticateContainer} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/logout" component={LogoutContainer} />
      <Route path="/results" component={QuizResultContainer} />
    </div>
  </Router>
);
