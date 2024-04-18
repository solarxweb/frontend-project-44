import
{
  getInt,
  doExecuteStart,
} from '../index.js';

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

const exerciseDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = () => {
  const checkCorrect = () => {
    const num = getInt();
    const primeCheck = isPrime(num);
    let answer = '';
    if (primeCheck === true) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    const exercise = num;
    return { exercise, answer };
  };
  doExecuteStart(exerciseDescription, checkCorrect);
};

export default getPrimeNumber;
