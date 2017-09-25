import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Routes } from "./config/routes";
import { reducers } from "./redux/reducers";
import { checkIfAuthed } from "./helpers/auth";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { setUpListenersAndData } from "./helpers/initialization";

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
setUpListenersAndData(store);
