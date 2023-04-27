import readlineSync from 'readline-sync';
import { getRandomIntInclusive, gcd, areUserRight } from '../util.js';
import welcome from '../cli.js';

const gcdGame = () => {
  const name = welcome();
  console.log('Find the greatest common divisor of given numbers.');
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomIntInclusive(1, 100);
    const num2 = getRandomIntInclusive(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(num1, num2);
    const isRight = areUserRight(answer, correctAnswer, name);
    if (!isRight) {
      return null;
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export default gcdGame;
