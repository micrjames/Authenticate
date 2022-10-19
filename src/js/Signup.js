import { Form } from "./Form.js";

class Signup {
    #signupForm = null;
    constructor(form, fields) {
	    this.#signupForm = new Form(form, fields);
	}

    get values() {
	   return this.#signupForm.values;
	}

    get data() {
	   return this.#signupForm.data;
	}

    onSubmit(submitCB) {
	   this.#signupForm.form.addEventListener("submit", event => {
		   event.preventDefault();
		   submitCB();
	   });
	}
}

export { Signup };
