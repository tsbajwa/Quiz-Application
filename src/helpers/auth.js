export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "hey",
        avatar: "avatarURLSd",
        uid: "PersonUID",
      });
    }, 2000);
  });
}
