import {
  getNameGreetings, getInt, getOperator,
  writeExercise, writeAnswer, writeQuestion,
  playThreeTimes,
  checkCorrect,
} from '../src/index.js';

let theName = '';

const solution = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
      return false;
  }
};

const playRound = () => {
  const num1 = getInt();
  const num2 = getInt();
  const operator = getOperator();
  writeQuestion(`${num1} ${operator} ${num2}`);
  const value = writeAnswer();
  const userAnswer = Number(value);
  const correctAnswer = solution(num1, num2, operator);
  const invalidAnswer = userAnswer;

  return checkCorrect(userAnswer, correctAnswer, invalidAnswer, theName);
};

const brainCalc = () => {
  theName = getNameGreetings();
  writeExercise('What is the result of the expression?');
  playThreeTimes(theName, playRound);
};

export default brainCalc;
