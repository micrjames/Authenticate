import { signupLoginErrMsg } from "./incs.js";

const validateLogin = function(loginData, dbData, doValid) {
    dbData.then(res => {
	    const users = res;
	    const user = users.find(thisUser => thisUser.username == loginData[0]);
	    if(user) {
		    if(user.password == loginData[1]) {
			    doValid();
			    if(signupLoginErrMsg) signupLoginErrMsg.textContent = "";
			} else {
			    signupLoginErrMsg.textContent = "Password does not match records.";
			}
		} else {
            signupLoginErrMsg.textContent = "Username or Password does not match records.";
		}
    }).catch(err => console.log(err));
};

const validateSignup = function(signupData, dbData, doValid) {
    dbData.then(res => {
	    const user = res[0];
	    const name = user.name;
	    const username = user.username;
	    const password = user.password;
	    const confirm_password = user.confirm_password;
	    const email = user.email;

		let errorMsg = "";
	    if(signupData.password == signupData.confirm_password) { 
		} else {
		   console.log("test!");
		}
	}).catch(err => console.log(err));
};

export { validateLogin, validateSignup };
