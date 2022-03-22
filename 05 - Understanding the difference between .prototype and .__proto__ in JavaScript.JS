// JavaScript automatically creates this dunder proto(_proto_) property on every object automatically.
// whenever we define a function, JavaScript will automatically create an object as the value of a .prototype property.
// This property is not used in the prototype chain look-up if we were to dot onto the foo function when looking up a property.
// The .prototype property object that lives on every function except arrow functions is 
//what becomes the dunder proto value object when the new keyword is used against the function.
function foo() { }

foo.prototype.test = 'hello world'

console.log(foo.prototype)

const name = new foo() // foo is dunder proto of name
// const name =  foo() //err foo isn't dunder proto value of name => .test is not used in the prototype chain look-up

console.log(name.test)

// run with console in browser
{
     Object // f Object() { [native code] } it's actually a function.
}