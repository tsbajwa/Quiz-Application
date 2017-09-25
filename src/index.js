import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Routes } from "./config/routes";
import { reducers } from "./redux/reducers";
import { checkIfAuthed } from "./helpers/auth";
import { firebaseAuth } from "./config/constant";
import {
  fetchingUserSuccess,
  removeFetchingUser,
  authUser,
  fetchingQ,
  fetchingQSuccess,
} from "./redux/actions";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { fetchQuestions } from "./helpers/api";

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

function isAuthed() {
  if (store.getState().user.isFetching === true) {
    return;
  }
  return checkIfAuthed(store);
}

ReactDOM.render(
  <Provider store={store}>{Routes(isAuthed)}</Provider>,
  document.getElementById("root")
);
registerServiceWorker();
setTimeout(() => {
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      const userData = user.providerData[0];
      const { displayName, uid } = userData;
      store.dispatch(fetchingUserSuccess(displayName, uid));
      store.dispatch(authUser());
    } else {
      store.dispatch(removeFetchingUser());
    }
  });
  store.dispatch(fetchingQ());
  fetchQuestions().then(questions => {
    store.dispatch(fetchingQSuccess(questions));
  });
});
