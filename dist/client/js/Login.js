import { Form } from "./Form.js";

class Login {
    #loginForm = null;
    constructor(form, fields) {
	    this.#loginForm = new Form(form, fields);
	}

    get values() {
	   return this.#loginForm.values;
	}

    onSubmit(submitCB) {
	   this.#loginForm.form.addEventListener("submit", event => {
		   event.preventDefault();
		   submitCB();
	   });
	}
}

export { Login };
