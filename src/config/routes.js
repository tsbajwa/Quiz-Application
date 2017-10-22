import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { NavBarContainer, LogoutContainer } from "../containers";
import { QuizPage, FrontPage, AuthPage, ProfilePage, ResultsPage } from "../pages";

export const Routes = isAuthed => (
  <Router>
    <div>
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={FrontPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/auth" component={AuthPage} />
      <Route
        path="/profile"
        render={() => (isAuthed() ? <ProfilePage /> : <Redirect to="/auth" />)}
      />
      <Route path="/logout" component={LogoutContainer} />
      <Route path="/results" component={ResultsPage} />
    </div>
  </Router>
);
