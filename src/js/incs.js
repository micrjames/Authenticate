const body = document.body;
const signupLogin = body.children.namedItem("signup-login");
const signupLoginHdr = signupLogin.children.namedItem("signup-login-hdr");
const signupLoginHdrBtnGroup = signupLoginHdr.children.namedItem("signup-login-hdr-btn-group");

const loginToggleBtn = signupLoginHdrBtnGroup.children[0];
const signupToggleBtn = signupLoginHdrBtnGroup.children[1];

const signupForm = document.forms[0];
const loginForm = document.forms[1];

const lightestBgColor = "#945ec9";
const lighterBgColor = "#8547c2";

export { loginToggleBtn, signupToggleBtn, signupForm, loginForm, lightestBgColor, lighterBgColor };
