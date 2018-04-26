const puzzleEl = document.querySelector('#puzzle');
const remainingGuessEl = document.querySelector('#remaining-guesses');

let game1;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = '';
  remainingGuessEl.textContent = game1.statusMessage;

  game1.puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  })
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2')
//   .then(puzzle => console.log(puzzle))
//   .catch(err => console.log(err));

// getCountry('MX')
//   .then(country => console.log(country.name))
//   .catch(err => console.log(err));

// getCurrentCountry().then(country => {
//   console.log(country.name);
// }).catch(err => console.log(err));

// getLocation()
//   .then(data => {
//     console.log(`${data.city}, ${data.region}, ${data.country}`);
//     return getCountry(data.country);
//   })
//   .then(country => console.log(country))
//   .catch(err => console.log(err));
