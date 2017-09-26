import { firebaseAuth } from "../config/constant";
import { fetchingUserSuccess, removeFetchingUser, authUser } from "../redux/actions";

export function setUpListeners(store) {
  setUpAuthListener(store);
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
