import { loginState, signupState, 
         loginToggleBtn, signupToggleBtn,
       } from "./incs.js";
import { toggleFormState } from "./loginSignup.js";

toggleFormState(loginState, signupState);

loginToggleBtn.addEventListener("click", function() {
    toggleFormState(loginState, signupState);
});

signupToggleBtn.addEventListener("click", function() {
    toggleFormState(signupState, loginState);
});
