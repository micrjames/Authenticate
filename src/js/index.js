import { loginForm, signupForm, 
         loginToggleBtn, signupToggleBtn,
       } from "./incs.js";
import { toggleFormState } from "./loginSignup.js";
import { Login } from "./Login.js";
import { Signup } from "./Signup.js";
import { fetchData, setOption } from "./fetchData.js";
import { HOST, PORT } from "./config_server.js";

const loginState = [loginToggleBtn, loginForm];
const signupState = [signupToggleBtn, signupForm];

toggleFormState(loginState, signupState);

loginToggleBtn.addEventListener("click", function() {
    toggleFormState(loginState, signupState);
});

signupToggleBtn.addEventListener("click", function() {
    toggleFormState(signupState, loginState);
});

if(loginForm) {
    const fields = ["username", "password"];
    const login = new Login(loginForm, fields);
    login.onSubmit(function() {
		localStorage.setItem("auth", 1);
	    const values = login.values;
	    console.log(values);
	});
}
if(signupForm) {
    const fields = ["name", "username", "password", "confirm_password", "email"];
    const signup = new Signup(signupForm, fields);
    signup.onSubmit(function() {
	    const user = signup.data;
	    addUser(user);
	});
}

const fetchUsers = async () => {
    return await fetchData(`http://${HOST}:${PORT}/users`);
};
const addUser = async user => {
    await fetchData(`http://${HOST}:${PORT}/users`, setOption('POST', user));
};
