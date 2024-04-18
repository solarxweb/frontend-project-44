import {
  doExecuteStart,
  getInt, getOperator,
} from '../index.js';

const solution = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
      return false;
  }
};

const exerciseDescription = 'What is the result of the expression?';

const doCalculate = () => {
  const checkCorrect = () => {
    const num1 = getInt();
    const num2 = getInt();
    const operator = getOperator();
    const exercise = `${num1} ${operator} ${num2}`;
    const answer = String(solution(num1, num2, operator));

    return { exercise, answer };
  };
  doExecuteStart(exerciseDescription, checkCorrect);
};

export default doCalculate;
