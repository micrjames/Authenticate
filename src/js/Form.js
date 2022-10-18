class Form {
   #form = null;
   #fields = [];
    
   #values = [];                                                                                       
   constructor(form, fields) {                                                                         
       this.#form = form;                                                                               
       this.#fields = fields;                                                                           
   }                                                                                                   

   get form() {
	   return this.#form;
   }
 
   get values() {                                                                                
       const formEls = this.form.elements;
         
       this.#values = this.#fields.map(field => {
		  const input = formEls[field];
          return input.value;
       });
	   
	   return this.#values;
   }   
}

export { Form };
