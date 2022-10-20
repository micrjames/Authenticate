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
	    if(signupData.password == signupData.confirm_password) { 
			const users = res;
			const user = users.find(thisUser => thisUser.username == signupData.username);
		    if(user) {
			   signupLoginErrMsg.textContent = "Username is not available";
			} else {
			   doValid();
			   if(signupLoginErrMsg) signupLoginErrMsg.textContent = "";
			}
		} else {
		    signupLoginErrMsg.textContent = "Passwords do not match.";
		}
	}).catch(err => console.log(err));
};

export { validateLogin, validateSignup };
