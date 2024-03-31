//=======================================
// added to require inquirer for npm install and npm start to initialize and added const for shapes and createShapes
//=======================================
const inquirer = require('inquirer');
const {square, circle, triangle} = require('./Assets/shape');
const createShape = inquirer.createPromptMpdule();