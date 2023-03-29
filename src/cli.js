import readlineSync from 'readline-sync';

const nameSecond = readlineSync.question('May I have your name? ')
console.log("Hello," , nameSecond +"!");