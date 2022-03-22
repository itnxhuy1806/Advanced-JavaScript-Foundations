// JavaScript does not have a true class. It uses prototypes, which we can see here is just an object.
// These objects are automatically linked together for us by JavaScript engines so that we can access properties and methods.

// Whenever we do lookups on an object in JavaScript, it will go through each prototype chained object
//until it finds the corresponding property, or it will return undefined if it never finds it.
// It stops searching through this chain as soon as it matches on a property.

const a = {}

a.toString = function() {return true}

const b = Object.create(a)

console.log(b.toString())
//let's run with console in browser
