import { loginToggleBtn, signupToggleBtn,
   		 loginForm, signupForm,
         lightestBgColor, lighterBgColor } from "./incs.js";

loginToggleBtn.style.backgroundColor = lightestBgColor;
loginToggleBtn.style.borderBottom = "none";

signupToggleBtn.style.backgroundColor = lighterBgColor;

signupForm.classList.add("hidden");
loginToggleBtn.addEventListener("click", function() {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    this.style.backgroundColor = lightestBgColor;
    signupToggleBtn.style.backgroundColor = lighterBgColor;

    this.style.borderBottom = "none";
    signupToggleBtn.style.borderBottom = "1px solid white";
});

signupToggleBtn.addEventListener("click", function() {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");

    this.style.backgroundColor = lightestBgColor;
    loginToggleBtn.style.backgroundColor = lighterBgColor;

    this.style.borderBottom = "none";
    loginToggleBtn.style.borderBottom = "1px solid white";
});
