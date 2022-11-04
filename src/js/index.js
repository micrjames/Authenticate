import { loginForm, signupForm, 
         loginToggleBtn, signupToggleBtn,
       } from "./incs.js";
import { toggleFormState } from "./loginSignup.js";
import { Login } from "./Login.js";
import { Signup } from "./Signup.js";
import { fetchUsers, addUser } from "./crudUsers.js";
import { validateLogin, validateSignup } from "./validateFormData.js";

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
	    const user = login.values;
	    const users = fetchUsers();
	    
	    validateLogin(user, users, function() {
			localStorage.setItem("auth", 1);
			loginForm.reset();

		    users.then(res => {
			    const users = res;
			    const whichUser = users.find(thisUser => thisUser.username == user[0]);
			    const name = whichUser.name;
			    const fullName = name.split(" ");
			    const firstName = fullName[0];

			    location.replace(`dashboard.html?name=${firstName}`);
			}).catch(err => console.log(err));
	   });
	});
}
if(signupForm) {
    const fields = ["name", "username", "password", "confirm_password", "email"];
    const signup = new Signup(signupForm, fields);
    signup.onSubmit(function() {
	    const user = signup.data;
	    const users = fetchUsers();
	    
	    validateSignup(user, users, function() {
		   addUser(user);
		   localStorage.setItem("auth", 1);
		   signupForm.reset();
		});
	});
}
