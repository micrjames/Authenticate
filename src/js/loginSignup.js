import { lightestBgColor, lighterBgColor } from "./incs.js";

const toggleFormState = function(startState, endState) {
   if(startState[1].classList.contains("hidden")) startState[1].classList.remove("hidden");
   startState[0].style.backgroundColor = lightestBgColor;
   startState[0].style.borderBottom = "none";

   endState[0].style.backgroundColor = lighterBgColor;
   endState[1].classList.add("hidden");
};

export { toggleFormState };
