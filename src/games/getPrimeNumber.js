import doExecuteStart from '../index.js';
import getInt from '../utility.js';

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

const solution = (primeCheck) => (primeCheck === true ? 'yes' : 'no');

const getGameData = () => {
  const num = getInt(1, 55);
  const primeCheck = isPrime(num);
  const answer = solution(primeCheck);

  return { exercise: num, answer };
};

const exerciseDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startBrainPrime = () => {
  doExecuteStart(exerciseDescription, getGameData);
};

export default startBrainPrime;
