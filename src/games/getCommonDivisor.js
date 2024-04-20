import doExecuteStart from '../index.js';
import getInt from '../utility.js';

const solution = (first, second) => {
  let greater;
  let lower;
  let result;
  if (first % second === 0) {
    result = second;
    return second;
  }
  if (second % first === 0) {
    result = first;
    return first;
  }
  if (second !== 0 && first !== 0) {
    greater = Math.max(first, second);
    lower = Math.min(first, second);
    while (greater % lower !== 0) {
      result = greater % lower;
      greater = lower;
      lower = result;
    }
  }
  return result;
};

const exerciseDescription = 'Find the greatest common divisor of given numbers.';

const checkCorrect = () => {
  const firstNum = getInt(1, 62);
  const secondNum = getInt(1, 62);
  const exercise = `${firstNum} ${secondNum}`;
  const answer = String(solution(firstNum, secondNum));

  return { exercise, answer };
};

const getCommonDivisor = () => {
  checkCorrect();
  doExecuteStart(exerciseDescription, checkCorrect);
};

export default getCommonDivisor;
