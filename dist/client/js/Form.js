class Form {
   #form = null;
   #fields = [];
    
   #values = [];                                                                                       
   #data = {};
   constructor(form, fields) {                                                                         
       this.#form = form;                                                                               
       this.#fields = fields;                                                                           
   }                                                                                                   

   get form() {
	   return this.#form;
   }
 
   get values() {                                                                                
       const formEls = this.#form.elements;
         
       this.#values = this.#fields.map(field => {
		  const input = formEls[field];
          return input.value;
       });
	   
	   return this.#values;
   }   

   get data() {
	   this.values.forEach((value, index) => {
		   this.#data[this.#fields[index]] = value;
	   });
	   
	   return this.#data;
   }
}

export { Form };
