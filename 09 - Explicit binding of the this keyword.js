const person = {
  firstName: 'tyler'
}

function getName() {
  return `${this.firstName} is my first name`
}
function getName2() {
  console.log(`${this.firstName} is my first name`)
}
console.log(getName.call(person))
console.log(getName.apply(person)) // can include array
setInterval(getName2.bind(person), 3000)
// The bind method does not actually invoke the function like call and apply did, but rather returns a new function 
//that can now be called anywhere, and its first param is now the this context whenever it is actually called.