import { Auth, logout } from "./auth.js";

// running on http://www.example.com?name=n1&name=n2
// let params = new URLSearchParams(location.search);
// params.get("name") # => "n1"
// params.getAll("name") # => ["n1", "n2"]

const auth = new Auth();
logout.addEventListener("click", () => {
    auth.logout();
});
