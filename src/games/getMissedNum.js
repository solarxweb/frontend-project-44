import doExecuteStart from '../index.js';
import getInt from '../utility.js';

let temp = 0;

const solution = () => {
  const numsList = [];
  const pickedEl = '..';
  const getEl = getInt(9, 9);
  let num = getInt(1, 66);
  const method = getInt(2, 5);
  for (let i = 0; numsList.length < 10; i += 1) {
    numsList.push(num);
    num += method;
  }
  temp = numsList[getEl];
  numsList[getEl] = pickedEl;
  return numsList.join(' ');
};

const getGameData = () => {
  const exercise = solution();
  const answer = String(temp);

  return { exercise, answer };
};

const exerciseDescription = 'What number is missing in the progression?';

const startBrainProgression = () => {
  doExecuteStart(exerciseDescription, getGameData);
};

export default startBrainProgression;
