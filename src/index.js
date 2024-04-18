import readlineSync, { question } from 'readline-sync';
import getNameGreeting from './cli.js';

const getInt = () => {
  const randomNumber = Math.floor(Math.random() * 55 + 1);
  return randomNumber;
};

const getOperator = () => {
  const arr = ['+', '-', '*'];
  const randomSymb = Math.floor(Math.random() * arr.length);
  return arr[randomSymb];
};

const doExecuteStart = (exerciseDescription, checkCorrect) => {
  const theName = getNameGreeting();
  console.log(exerciseDescription);

  for (let i = 0; i < 3; i += 1) {
    const { exercise, answer } = checkCorrect();
    console.log(`Question: ${exercise}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    }
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${theName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${theName}!`);
  return true;
};

export { getInt, getOperator, doExecuteStart };
