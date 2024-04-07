import {
  getInt, getNameGreetings, writeExercise, writeQuestion, writeAnswer,
  checkCorrect, playThreeTimes,
} from '../src/index.js';

let theName = '';
let temp = 0;
console.log(temp);

const eachX = () => {
  const min = 2;
  const max = 5;
  return Math.floor(Math.random() * (max - min) + min);
};

const randomEl = () => {
  const el = Math.floor(Math.random() * 10);
  return el;
};

const solution = () => {
  const numsList = [];
  const pickedEl = '..';
  const getEl = randomEl();
  let num = getInt();
  const method = eachX();
  for (let i = 0; numsList.length < 10; i += 1) {
    numsList.push(num);
    num += method;
  }
  temp = numsList[getEl];
  numsList[getEl] = pickedEl;
  return numsList.join(' ');
};

const playRound = () => {
  writeQuestion(solution());
  const value = writeAnswer();
  const userAnswer = Number(value);
  const invalidAnswer = userAnswer;

  return checkCorrect(userAnswer, temp, invalidAnswer, theName);
};

const getMissedNum = () => {
  theName = getNameGreetings();
  writeExercise('What the number is missing in the progression?');
  playThreeTimes(theName, playRound);
};
export default getMissedNum;
