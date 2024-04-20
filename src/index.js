import readlineSync from 'readline-sync';

const doExecuteStart = (exerciseDescription, checkCorrect) => {
  const getNameGreetings = () => {
    console.log('Welcome to the Brain Games!');
    const theName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${theName}!`);
    return theName;
  };
  const theName = getNameGreetings();
  console.log(exerciseDescription);

  for (let i = 0; i < 3; i += 1) {
    const { exercise, answer } = checkCorrect();
    console.log(`Question: ${exercise}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${theName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${theName}!`);
};

export default doExecuteStart;
