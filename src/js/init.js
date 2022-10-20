import { Auth, logout, dashboardHdr } from "./auth.js";

const params = new URLSearchParams(location.search); 
const name = params.get("name"); 

dashboardHdr.textContent = `Welcome to the Dashboard, ${name}.`;

const auth = new Auth();
logout.addEventListener("click", () => {
    auth.logout();
});
