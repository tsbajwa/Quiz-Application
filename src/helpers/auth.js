import { ref, firebaseAuth } from "../config/constant";

// export default function auth() {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () =>
//         resolve({
//           name: "jit",
//           uid: "the-uid",
//         }),
//       2000
//     );
//   });
// }

export default function auth() {
  const fbProvider = new firebaseAuth.FacebookAuthProvider();
  return firebaseAuth().signInWithPopup(fbProvider);
}

//Need to make redux store for this
export function checkIfAuthed(store) {
  return store.getState().isAuthed;
}

export function logout() {
  return firebaseAuth().signout();
}

export function saveUser(user) {
  return ref
    .child(`users/${user.uid}`)
    .set(user)
    .then(() => user);
}
