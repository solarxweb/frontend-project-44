import {
  getNameGreetings, getInt, getOperator,
  writeExercise, writeAnswer, writeQuestion,
} from '../src/index.js';

const brainCalc = () => {
  const theName = getNameGreetings();
  for (let i = 0; i < 3; i += 1) {
    const num1 = getInt();
    const num2 = getInt();
    const operator = getOperator();
    let expression;
    let res;
    writeExercise('What is the result of the expression?');
    writeQuestion(`${num1} ${operator} ${num2}`);
    const answer = writeAnswer();
    if (operator === '+') {
      res = num1 + num2;
      expression = Number(answer) === res;
      if (expression) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${theName}!`);
      }
    } if (operator === '-') {
      res = num1 - num2;
      expression = Number(answer) === res;
      if (expression) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${theName}!`);
      }
    } if (operator === '*') {
      res = num1 * num2;
      expression = Number(answer) === res;
      if (expression) {
        console.log('Correct!');
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${theName}!`);
      }
    }
  }
  return console.log(`Congratulation, ${theName}!`);
};

export default brainCalc;
