import { ref, firebaseAuth } from "../config/constant";

export default function auth() {
  const fbProvider = new firebaseAuth.FacebookAuthProvider();
  return firebaseAuth().signInWithPopup(fbProvider);
}

export function checkIfAuthed(store) {
  console.log(store.getState().user.isAuthed);
  return store.getState().user.isAuthed;
}
//TODO: Remove console.log statements
export function logout() {
  return firebaseAuth()
    .signOut()
    .then(() => {
      console.log("Sign out successful");
    })
    .catch(error => {
      console.log("signout Error", error);
    });
}

export function saveUser(user) {
  return ref
    .child(`users/${user.uid}`)
    .set(user)
    .then(() => user);
}
