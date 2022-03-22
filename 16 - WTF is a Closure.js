//At its simplest definition, Closure is a nested function that has access to at least 
//three levels of scopes (it's own scope, the parent scope, and the global scope)
const workshop = 'JavaScript'

function parent() {
  const par = 'tyler'
  return function child() {
    const chi = 'clark'
    console.log(workshop, par, chi)
  }
}

const me = parent()

me()