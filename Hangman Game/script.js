const words = ["javascript", "html", "css", "jquery", "bootstrap", "react"];
const maxGuesses = 6;

let guessedLetters = [];
let word = words[Math.floor(Math.random() * words.length)];
let remainingGuesses = maxGuesses;
let gameWon = false;

const wordElement = document.getElementById("word");
const guessesElement = document.getElementById("guesses");
const buttonsElement = document.getElementById("buttons");

function updateWord() {
  let wordDisplay = "";
  gameWon = true;

  for (let i = 0; i < word.length; i++) {
    if (guessedLetters.includes(word[i])) {
      wordDisplay += word[i];
    } else {
      wordDisplay += "_";
      gameWon = false;
    }
  }

  wordElement.innerText = wordDisplay;
}

function updateGuesses() {
  let guessesDisplay = "Remaining Guesses: " + remainingGuesses;

  if (guessedLetters.length > 0) {
    guessesDisplay += "<br>Guessed Letters: " + guessedLetters.join(", ");
  }

  guessesElement.innerHTML = guessesDisplay;
}

function updateButtons() {
  buttonsElement.innerHTML = "";

  for (let i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);

    if (guessedLetters.includes(letter)) {
      buttonsElement.innerHTML += `<button disabled>${letter}</button>`;
    } else {
      buttonsElement.innerHTML += `<button onclick="guess('${letter}')">${letter}</button>`;
    }
  }
}

function checkGameOver() {
  if (remainingGuesses === 0) {
    alert("Game Over! The word was " + word);
    document.location.reload();
  } else if (gameWon) {
    alert("Congratulations, you won!");
    document.location.reload();
  }
}

function guess(letter) {
  guessedLetters.push(letter);

  if (!word.includes(letter)) {
    remainingGuesses--;
  }

  updateWord();
  updateGuesses();
  updateButtons();
  checkGameOver();
}

function playAgain() {
  document.location.reload();
}

buttonsElement.innerHTML += `<button onclick="playAgain()">Play Again</button>`;

updateWord();
updateGuesses();
updateButtons();
