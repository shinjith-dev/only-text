import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firbaseConfig";

const commands = {};

commands.login = async function () {
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(auth, provider).then(
    (userCredential) =>
      `Logged in successfully using ${userCredential.user.email}`
  );
};

commands.help = async function () {
  const helps =
    "Only-text v1.0\nclear - clear console history\nlogin - authenticate and login to\n\tonly-text\nlogout - sign out of current account\nuserinfo - shows your details";
  return helps;
};

commands.logout = async function () {
  return signOut(auth).then(() => `Logged out`);
};

commands.userinfo = async function () {
  const user = auth.currentUser;
  if (user) {
    const useri = `name: ${user.displayName}\nemail: ${user.email}`;
    return useri;
  } else return `Error: not logged in!`;
};

export default commands;
