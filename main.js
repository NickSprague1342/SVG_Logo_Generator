//=======================================
// added to require inquirer for npm install and npm start to initialize and added const for shapes and createShapes
//=======================================
const inquirer = require('inquirer');
const {square, circle, triangle} = require('./Assets/shape');
const createShape = inquirer.createPromptMpdule();

function startInformation(){
    prompt([
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
            name:'text',
            message:'What shape would you like your logo to be?',
            choices:['square', 'circle', 'triangle']
        },
    ])
}