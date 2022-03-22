class Rectangle {
     constuctor(height, width) {
       this.name = 'Rectangle'
       this.height = height
       this.width = width
     }
   }
   
   class Square extends Rectangle {
     constructor(length) {
     super(length, length)
     this.name = 'Square'
     }
   }
   
   const myShape = new Square(1)
   
   console.log(myShape)