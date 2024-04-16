import
{
  getNameGreetings, getInt, writeAnswer,
  writeExercise, writeQuestion, playThreeTimes,
  checkCorrect,
} from '../src/index.js';

let getName = '';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playRound = () => {
  const num = getInt();
  const primeCheck = isPrime(num);
  let answer = '';
  if (primeCheck === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  writeQuestion(num);
  const userAnswer = writeAnswer();
  const invalidAnswer = userAnswer;
  return checkCorrect(userAnswer, answer, invalidAnswer, getName);
};
const getPrimeNumber = () => {
  getName = getNameGreetings();
  writeExercise('Answer "yes" if given number is prime. Otherwise answer "no".');
  playThreeTimes(getName, playRound);
};

export default getPrimeNumber;
