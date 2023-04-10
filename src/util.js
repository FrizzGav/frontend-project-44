import readlineSync from 'readline-sync';

function getRandomIntInclusive(min, max) {
  const minimal = Math.ceil(min);
  const maximal = Math.floor(max);
  return Math.floor(Math.random() * (maximal - minimal + 1)) + minimal;
}

const askUserAnswer = () => {
  const userAnswer = readlineSync.question('Answer: ');
  return userAnswer;
};
export {
  getRandomIntInclusive,
  askUserAnswer,
};
