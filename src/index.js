import readlineSync from 'readline-sync';

export const getNameGreetings = () => {
  console.log('Welcome to Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  return getName;
};

export const getInt = () => {
  const x = Math.floor(Math.random() * 25);
  return x;
};
export const getOperator = () => {
  const arr = ['+', '-', '*'];
  const x = Math.floor(Math.random() * arr.length);
  return arr[x];
};
