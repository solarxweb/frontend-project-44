import readlineSync from 'readline-sync';

const getNameGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  return getName;
};

export default getNameGreetings;
