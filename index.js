class Polygon {
    constructor(array){
        this.sidesArray = array;
    }
    get countSides(){
        return this.sidesArray.length; 
    }
    get perimeter(){
        return this.sidesArray.reduce((x,y) => x+y)
    }
}

class Triangle extends Polygon{
    get isValid(){
        return (this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2] && this.sidesArray[0] + this.sidesArray[2] > this.sidesArray[1] && this.sidesArray[2] + this.sidesArray[1] > this.sidesArray[0]);
    }
}

class Square extends Polygon {
    get isValid(){
        return (this.sidesArray[0] == this.sidesArray[1] && this.sidesArray[1] == this.sidesArray[2] && this.sidesArray[2] == this.sidesArray[3]  )
    }

    get area(){
        return this.sidesArray[0] * this.sidesArray[1];
    }
}

let myShape = new Polygon([10,10,10,10]); 
let myTriangle = new Triangle([5,5,7]);
let mySquare = new Square([2, 2, 2, 2])

//console.log(myShape.perimeter);
//console.log(myTriangle.isValid);
console.log(mySquare.isValid)
