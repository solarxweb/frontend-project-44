import {
  writeExercise, writeQuestion,
  writeAnswer, checkCorrect, getInt, getNameGreetings, playThreeTimes,
} from '../src/index.js';

let theName = '';
let correctAnswer = 0;

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
      console.log(result);
    }
  }
  return result;
};
const playRound = () => {
  const firstNum = getInt();
  const secondNum = getInt();
  writeQuestion(`${firstNum} ${secondNum}`);
  const innerValue = writeAnswer();
  const userAnswer = Number(innerValue) || innerValue || '';
  correctAnswer = solution(firstNum, secondNum);
  const notCorrectAnswer = userAnswer;

  return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, theName);
};

const getCommonDivisor = () => {
  theName = getNameGreetings();
  writeExercise('Find the greatest common divisor of given numbers.');
  playThreeTimes(theName, playRound);
};

export default getCommonDivisor;
