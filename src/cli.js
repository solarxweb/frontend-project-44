/* eslint-disable no-console */

import readlineSync from 'readline-sync';

export const getNameGreetings = () => {
  console.log('Welcome to Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
};

export const getEvenNumber = () => {
  const collOfNums = [15, 6, 7];
  console.log('Welcome to Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log('Answer "yes if the number is even, otherwise answer "no"');
  for (let i = 0; i < collOfNums.length; i += 1) {
    console.log(`Question: ${collOfNums[i]}`);
    const answer = readlineSync.question('Your answer: ');
    if (collOfNums[i] % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (collOfNums[i] % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${getName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getName}!`);
};
