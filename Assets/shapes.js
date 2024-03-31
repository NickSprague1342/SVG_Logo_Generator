//===============================
// added below to create shapes using constructor and this. 
//=============================== -NAS
class createShapes {
    constructor(text, color){
        this.text = text
        this.color = color
    }
}

//===============================
// added below to create each shape. for class square extend is used to denote square is a child of createShapes
// then render and return are used in conjuncture with polygon points to define the border of the created shape.
// this.text and this.color used to insert text and color into logo.
// 
// same method is repeated for circle and triangle below with small variations related to the actual construction
// of the desired shape.
//
// used https://www.w3schools.com/graphics/svg_circle.asp , https://www.w3schools.com/graphics/svg_polygon.asp , and https://www.w3schools.com/react/react_render.asp
//=============================== -NAS
class square extends createShapes{
    render() {
        return `<polygon points="10,10 200,10 200,200 10,200" + this.text + this.color  />`;
    }
}

class circle extends createShapes{
    render() {
        return `<circle cx="150" cy="100" r="80" + this.text + this.color  />`;
    }
}

class triangle extends createShapes{
    render() {
        return `<polygon points="100,10 190,190 10,190" + this.text + this.color />`;
    }
}

//================================
// below is used to export shape classes as defined above
//================================ -NAS
module.exports = {square, circle, triangle};

//================================
// DONE
//================================ -NAS