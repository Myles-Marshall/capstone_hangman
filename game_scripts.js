const welcome = document.getElementById("welcome");
welcome.textContent = "Hello, " + localStorage.getItem("name");

function goBack() {
    window.location.href = "index.html"
}

function loseReload() {
    alert("YOU LOST!!!1! Word was: " + word.toUpperCase());
    location.reload();
}

function winReload() {
    alert("YOU WON!!!1!");
    location.reload();
}

function guessFunc() {
    for (let i = 0; i < word.length; i++) {
      if (guessInput.value.toLowerCase() === word[i]) {
        document.getElementById(i).textContent = guessInput.value.toLowerCase();
        document.getElementById(i).classList.add("correct")
      }
    }

    if (document.querySelectorAll(".correct").length === word.length) {
        setTimeout(winReload, 100);
    }

    if (word.includes(guessInput.value.toLowerCase()) === false && wrongGuesses <= 6 && wrongLetter.textContent.includes(guessInput.value.toUpperCase()) === false) {
        wrongGuesses++;
        wrongGuessDisplay.textContent = wrongGuesses;
        hangmanImg.src = hangmanSrc[wrongGuesses];

        if (wrongLetter.textContent.includes(guessInput.value.toUpperCase()) === false) {
          wrongLetters += guessInput.value + ", ";
          wrongLetter.textContent = wrongLetters.toUpperCase();
        }
    }

    if (wrongGuesses === 6) {
      setTimeout(loseReload, 100)
    }

    guessInput.value = "";
}

const wordDisplay = document.getElementById("word-display");
const guessInput = document.getElementById("guess-input");
const wrongGuessDisplay = document.getElementById("incorrect");
const hangmanImg = document.getElementById("hangman-img");
const wrongLetter = document.getElementById("wrong-letter")

let wrongLetters = "";

let hangmanSrc = [
    "images/hangman-0.svg",
    "images/hangman-1.svg",
    "images/hangman-2.svg",
    "images/hangman-3.svg",
    "images/hangman-4.svg",
    "images/hangman-5.svg",
    "images/hangman-6.svg"
];

let words = [
    "script", "assign", "input",
    "random", "append", "source",
    "image", "string", "variable",
    "length", "margin", "border",
    "body", "button", "submit",
    "function", "display", "number",
    "index", "document", "element",
    "query", "console", "font",
    "width", "height", "padding",
    "container", "javascript", "viewport",
    "math", "class", "loop",
    "value", "initialize", "canvas",
    "array", "float", "content",
    "style"
]

let randomWord = words[Math.floor(Math.random() * words.length)];

let word = randomWord;
console.log(word);
let index = 0;
let wrongGuesses = 0;

for (let char of word) {
    const letterDisplay = document.createElement("div");
    letterDisplay.classList.add("word-input");
    letterDisplay.id = index.toString();
    letterDisplay.textContent = "_";
    wordDisplay.appendChild(letterDisplay);
    index++;
  }
  
  guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      guessFunc();
    }
  });