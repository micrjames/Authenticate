import { loginForm, signupForm, 
         loginToggleBtn, signupToggleBtn,
       } from "./incs.js";
import { toggleFormState } from "./loginSignup.js";
import { Login } from "./Login.js";

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
