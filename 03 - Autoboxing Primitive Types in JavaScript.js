let str = 'string'
console.log(typeof str)
console.log(str.length) // why str variable have function length?
console.log(true.valueOf())
// JavaScript will wrap those primitives into an object. 
// With this new object, it will connect it to the built-in object prototype that corresponds with that primitive type. 
// Which thus, gives us access to the built-in dot prototype methods from the browser.

