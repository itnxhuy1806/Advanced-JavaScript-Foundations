// Lexical scope is a fundamental concept in JavaScript that involves the fact that every function creates a new scope.
//Lexical scope references author time of our code and not run time.
const person = {
     firstName: 'tyler',
     getName() {
          // console.log(`${this.firstName} is my first name`) // error
          return ()=> {console.log(`${this.firstName} is my first name`)}
     }
}
setInterval(person.getName(), 1000)
// This is because the function is not actually invoked on line 8 and is internally invoked within 
//the setInterval function, which would make its context be the window object. 
// The window object does not have a firstName property on it, so it returns "undefined is my first name".