import readlineSync from 'readline-sync';
import { getNameGreetings, getInt, getOperator } from '../src/index.js';

const brainCalc = () => {
  const theName = getNameGreetings();
  for (let i = 0; i < 3; i += 1) {
    const num1 = getInt();
    const num2 = getInt();
    const operator = getOperator();
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if ((operator === '+' && Number(answer) === num1 + num2) || (operator === '-' && Number(answer) === num1 - num2) || (operator === '*' && Number(answer) === num1 * num2)) {
      console.log('Correct!');
    } else {
      let res;
      if (operator === '+') {
        res = num1 + num2;
        console.log(`'${answer}'  is wrong answer ;(. Correct answer was ${res}\nLet's try again, ${theName}!`);
      } if (operator === '-') {
        res = num1 - num2;
        console.log(`'${answer}'  is wrong answer ;(. Correct answer was ${res}\nLet's try again, ${theName}!`);
      } if (operator === '*') {
        res = num1 * num2;
        console.log(`'${answer}'  is wrong answer ;(. Correct answer was ${res}\nLet's try again, ${theName}!`);
      }
      return;
    }
  }
  console.log(`Congratulation, ${theName}!`);
};

export default brainCalc;
