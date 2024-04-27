//=======================================
// added to require inquirer for npm install and npm start to initialize and added const for shapes and createShapes
//======================================= -NAS
const inquirer = require('inquirer');
const {square, circle, triangle} = require('./Assets/shape');
const createPrompt = inquirer.createPromptModule();

//=====================================
// below is a list of questions that the user will be required to answer
// in order to create their logo.
//===================================== -NAS
function startInformation(){
    createPrompt([
        {
            type:'input',
            name:'text',
            message:'What text would you like us to display? (Please enter UP TO three(3) letters)'
        },

        {
            type:'list',
            name:'color',
            choices:['green', 'blue', 'red',]
        },

        {
            type:'list',
            name:'shape',
            message:'What shape would you like your logo to be?',
            choices:['square', 'circle', 'triangle']
        },
    ])

//================================
// .then is used with promises from above questions
// after .then async function is used to createShape from the shapes.js
// switch is used to evaluate an expression, the expressions are listed
// as cases. below are the three cases, square, circle, and triangle
// default is used if the expression entered does not fit acceptance criteria
//
// used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
//
//================================= -NAS
    .then(({text, color, shape}) => {
        prompt({ type: 'list', name: 'shape', message: 'Please chose a shape from the lest provided.', choices: ['square', 'circle', 'triangle']})
        .then(async function ({createShape}) {
            console.log(createShape)
            switch (createShape) {
                case 'square':
                    const square = new Square(text, color, shape)
                    const showSquare = square.render()
                    console.log(showSquare)

                    break;
                case 'circle':
                    const circle = new Circle(text, color, shape)
                    const showCircle = circle.render()
                    console.log(showCircle)

                    break;
                case 'triangle':
                    const triangle = new Triangle(text, color, shape)
                    const showTriangle = triangle.render()
                    console.log(showTriangle)

                    break;
                default:
            }
        })
    })
}

//================================
// below I am calling the startInformation function which is what is
// used to start the logo creation
//================================ -NAS
startInformation()

//================================
// DONE
//================================ -NAS