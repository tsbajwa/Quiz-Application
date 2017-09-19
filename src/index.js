import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import { QuizContainer, AuthenticateContainer } from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import {
  questions,
  currentQuiz,
  quizOrder,
  currentQuestionIndex,
  lastAnsweredQuestionIndex,
  users,
} from "./redux/reducers";
const reducers = combineReducers({
  questions,
  currentQuiz,
  quizOrder,
  currentQuestionIndex,
  lastAnsweredQuestionIndex,
  users,
});

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={QuizContainer} />
      <Route path="/auth" component={AuthenticateContainer} />
    </div>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
