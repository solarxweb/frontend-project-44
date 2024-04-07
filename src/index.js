import readlineSync from 'readline-sync';

const getNameGreetings = () => {
  console.log('Welcome to Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  return getName;
};

const getInt = () => {
  const randomNumber = Math.floor(Math.random() * 25 + 1);
  return randomNumber;
};
const getOperator = () => {
  const arr = ['+', '-', '*'];
  const randomSymb = Math.floor(Math.random() * arr.length);
  return arr[randomSymb];
};

const writeExercise = (text) => {
  console.log(text);
};

const writeQuestion = (data) => {
  console.log('Question:', data);
};

const writeAnswer = () => {
  const data = readlineSync.question('Your answer: ');
  return data;
};

const checkCorrect = (userAnswer, correctAnswer, notCorrectAnswer, name) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  if (userAnswer === notCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  }
  return false;
};

const playThreeTimes = (name, playRound) => {
  for (let i = 0; i <= 2; i += 1) {
    const done = playRound();
    if (!done) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export {
  getInt, getOperator, writeExercise, writeQuestion,
  writeAnswer, checkCorrect, getNameGreetings, playThreeTimes,
};
