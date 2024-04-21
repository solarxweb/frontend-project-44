import doExecuteStart from '../index.js';
import getInt from '../utility.js';

const solution = (num) => (num % 2 === 0 ? 'yes' : 'no');

const exerciseDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const num = getInt(1, 50);
  const exercise = num;
  const answer = solution(exercise);
  return { exercise, answer };
};

const startBrainEven = () => {
  doExecuteStart(exerciseDescription, getGameData);
};

export default startBrainEven;
