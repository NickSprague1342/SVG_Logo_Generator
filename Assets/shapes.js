//===============================
// added below to create shapes using constructor and this. 
//===============================
const createShapes {
    constructor(text, color){
        this.text = text
        this.color = color
    }
}

//===============================
// added below to create each shape. for class square extend is used to denote square is a child of createShapes
// then render and return are used in conjuncture with polygon points to define the border of the created shape.
// fill is then used to color the created shape.
// 
// same method is repeated for circle and triangle below with small variations related to the actual construction
// of the desired shape.
//
// used https://www.w3schools.com/graphics/svg_circle.asp , https://www.w3schools.com/graphics/svg_polygon.asp , and https://www.w3schools.com/react/react_render.asp
//
//===============================
class square extends createShapes{
    render() {
        return `<polygon points="10,10 200,10 200,200 10,200" fill="blue" />`;
    }
}

class circle extends createShapes{
    render() {
        return `<circle cx="150" cy="100" r="80" fill="green" />`;
    }
}

class triangle extends createShapes{
    render() {
        return `<polygon points="100,10 190,190 10,190" fill="red" />`;
    }
}

//================================
// below is used to export shape classes as defined above
//================================
module.exports = {square, circle, triangle};

//================================
// DONE
//================================