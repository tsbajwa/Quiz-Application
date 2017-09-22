import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  AuthenticateContainer,
  ProfileContainer,
  MainContainer,
  LogoutContainer,
  QuizPageContainer,
  QuizResultContainer,
  FrontPageContainer,
} from "../containers";

export const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={MainContainer} />
      <Route exact path="/" component={FrontPageContainer} />
      <Route path="/quiz" component={QuizPageContainer} />
      <Route path="/auth" component={AuthenticateContainer} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/logout" component={LogoutContainer} />
      <Route path="/results" component={QuizResultContainer} />
    </div>
  </Router>
);
