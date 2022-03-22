var firstName = undefined
firstName = 'tyler'

function foo(){
  var firstName = 'clark'
  console.log(firstName) 
}

console.log(firstName)
foo()

console.log("-------------")

let fn = 'tyler'

{
  let fn= 'clark'
  console.log(fn) 
}

console.log(fn)