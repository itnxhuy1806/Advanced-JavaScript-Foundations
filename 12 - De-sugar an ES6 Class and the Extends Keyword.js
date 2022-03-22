{
     class Rectangle { }

     class Square extends Rectangle { }

     const shape = new Square()

     console.log(Object.getPrototypeOf(Object.getPrototypeOf(shape)) === Rectangle.prototype)
}

{
     function Rectangle() { }

     function Square() { }

     Object.setPrototypeOf(Square, Rectangle)

     const shape = new Square()

     console.log(Object.getPrototypeOf(shape) === Square.prototype) //true
}