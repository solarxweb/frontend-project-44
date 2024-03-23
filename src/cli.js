import readlineSync from 'readline-sync';


export const getNameGreetings = (name) => {
    console.log('Welcome to Brain Games!');
    const getName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${getName}!`);
}
