import doExecuteStart from '../index.js';
import getInt from '../utility.js';

const solution = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
      throw new Error('Something went wrong :c');
  }
};

const arr = ['+', '-', '*'];

const getGameData = () => {
  const num1 = getInt(1, 25);
  const num2 = getInt(1, 25);
  const operator = arr[getInt(0, arr.length - 1)];
  const exercise = `${num1} ${operator} ${num2}`;
  const answer = String(solution(num1, num2, operator));

  return { exercise, answer };
};

const exerciseDescription = 'What is the result of the expression?';

const startBrainCalc = () => {
  doExecuteStart(exerciseDescription, getGameData);
};

export default startBrainCalc;
