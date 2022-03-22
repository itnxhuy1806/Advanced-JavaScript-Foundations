(function findName() {
     console.log('hello')
     })();
//because it is an expression, you cannot access the IIFE in the global namespace.
//This includes any variable or any other function defined within the IIFE
(()=>{console.log('hello')})()