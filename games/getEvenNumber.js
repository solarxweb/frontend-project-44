import readlineSync from 'readline-sync';
import { getNameGreetings, getInt } from '../src/index.js';

const getEvenNumber = () => {
  const theName = getNameGreetings();
  for (let i = 0; i < 3; i += 1) {
    const num = getInt();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${theName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${theName}!`);
};

export default getEvenNumber;
