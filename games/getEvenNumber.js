import {
  getNameGreetings, getInt, writeAnswer,
  writeExercise, writeQuestion,
} from '../src/index.js';

const getEvenNumber = () => {
  const theName = getNameGreetings();
  writeExercise('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getInt();
    writeQuestion(num);
    const answer = writeAnswer();
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${theName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${theName}!`);
};

export default getEvenNumber;
