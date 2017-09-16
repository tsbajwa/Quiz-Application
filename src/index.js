import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import QuizContainer from "./containers/QuizContainer";
import {
  questions,
  currentQuiz,
  quizOrder,
  currentQuestionIndex,
} from "./redux/modules";

import registerServiceWorker from "./registerServiceWorker";

const reducers = combineReducers({
  questions,
  currentQuiz,
  quizOrder,
  currentQuestionIndex,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const App = () => (
  <div>
    <QuizContainer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
