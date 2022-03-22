
console.log(typeof 'string')
console.log(typeof 1)
console.log(typeof 42n)
console.log(typeof true)
console.log(typeof Symbol())
console.log(typeof null) //Tt's not an object, because of a bug introduced in the beginning of JavaScript that has since not been fixed
console.log(typeof undefined)

// Objects are passed by memory reference.
let o = { a: 1 }
function add1(obj) {
     obj.a = 2
     console.log(obj)
}
add1(o)
console.log(o);
// This is because primitive types are passed by value to function params. 
let pt = 1
function add2(num) {
     num = 2
     console.log(num)
}
add2()
console.log(pt);

