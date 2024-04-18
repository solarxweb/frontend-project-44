import {
  getInt, doExecuteStart } from '../index.js';

import getNameGreetings from '../cli.js';

let theName = '';
let temp = 0;

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

const exerciseDescription = 'What number is missing in the progression?';

const getMissedNum = () => {
  const checkCorrect = () => {
    const exercise = solution();
    const answer = String(temp);

    return { exercise, answer };
  };
  doExecuteStart(exerciseDescription, checkCorrect);
};

export default getMissedNum;
