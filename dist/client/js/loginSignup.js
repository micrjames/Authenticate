import { lightestBgColor, lighterBgColor } from "./incs.js";

const toggleFormState = function(startState, endState) {
   if(startState[1].classList.contains("hidden")) startState[1].classList.remove("hidden");
   startState[0].style.backgroundColor = lightestBgColor;
   startState[0].style.borderTopStyle = "solid";
   startState[0].style.borderRightStyle = "solid";
   startState[0].style.borderLeftStyle = "solid";

   endState[1].classList.add("hidden");
   endState[0].style.backgroundColor = lighterBgColor;
   endState[0].style.borderTopStyle = "dotted";
   endState[0].style.borderRightStyle = "dotted";
};

export { toggleFormState };
