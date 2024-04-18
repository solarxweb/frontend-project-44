import {
  getInt, doExecuteStart,
} from '../index.js';

const solution = (num) => (num % 2 === 0 ? 'yes' : 'no');

const exerciseDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenNumber = () => {
  const checkCorrect = () => {
    const num = getInt();
    const exercise = num;
    const answer = solution(exercise);
    return { exercise, answer };
  };
  doExecuteStart(exerciseDescription, checkCorrect);
};

export default getEvenNumber;
