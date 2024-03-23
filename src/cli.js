/* eslint-disable no-console */

import readlineSync from 'readline-sync';

const getNameGreetings = () => {
  console.log('Welcome to Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
};

export default getNameGreetings;
