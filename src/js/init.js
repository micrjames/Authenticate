import { Auth, logout } from "./auth.js";

const auth = new Auth();
logout.addEventListener("click", () => {
    auth.logout();
});
