import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
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

const store = createStore(reducers);
console.log(store.getState());

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
