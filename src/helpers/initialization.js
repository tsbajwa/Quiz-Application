import { firebaseAuth } from "../config/constant";
import { fetchQuestions } from "./api";
import {
  fetchingUserSuccess,
  removeFetchingUser,
  authUser,
  fetchingQ,
  fetchingQSuccess,
} from "../redux/actions";

export function setUpListenersAndData(store) {
  setUpAuthListener(store);
  setUpInitialData(store);
}

function setUpAuthListener(store) {
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
}

function setUpInitialData(store) {
  store.dispatch(fetchingQ());
  fetchQuestions().then(questions => {
    store.dispatch(fetchingQSuccess(questions));
  });
}
