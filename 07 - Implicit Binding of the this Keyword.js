// This keyword references the execution context of a function's call
const person = {
     firstName: 'tyler',
     getName() {
       return `${this.firstName} is my first name`
     }
   }
   
   console.log(person.getName())