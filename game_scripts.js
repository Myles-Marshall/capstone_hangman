const welcome = document.getElementById("welcome");
welcome.textContent = "Hello, " + localStorage.getItem("name");

function goBack() {
    window.location.href = "index.html"
}

function loseReload() {
    alert("YOU LOST!!!1!");
    location.reload();
}

function winReload() {
    alert("YOU WON!!!1!");
    location.reload();
}

function guessFunc() {
    for (let i = 0; i < word.length; i++) {
      if (guessInput.value === word[i]) {
        document.getElementById(i).textContent = guessInput.value;
        document.getElementById(i).classList.add("correct")
        console.log(document.querySelectorAll(".correct"))
      }
    }

    if (document.querySelectorAll(".correct").length === word.length) {
        setTimeout(winReload, 100);
    }

    if (word.includes(guessInput.value) === false && wrongGuesses < word.length && wrongLetter.textContent.includes(guessInput.value.toUpperCase()) === false) {
        wrongGuesses++;
        wrongGuessDisplay.textContent = wrongGuesses;
        hangmanImg.src = hangmanSrc[wrongGuesses];
        // wrongLetter.textContent += " " + guessInput.value;

        if (wrongLetter.textContent.includes(guessInput.value.toUpperCase()) === false) {
          wrongLetters += guessInput.value + ", ";
          wrongLetter.textContent = wrongLetters.toUpperCase();
        }

    }

    if (wrongGuesses === 6) {
      setTimeout(loseReload, 100)
    }
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
    "script", "assign", "inputs",
    "random", "append", "source",
    "images", "string", "reload",
    "length", "margin", "border",
    "cursor", "button", "submit",
    "method", "inline", "number",
    "concat"
]

let randomWord = words[Math.floor(((Math.random()) * (words.length)))];

let word = randomWord;
console.log(word);
let index = 0;
let wrongGuesses = 0;



for (let char of word) {
    // console.log(char)
    // console.log(index)
    const letterDisplay = document.createElement("div");
    letterDisplay.classList.add("word-input");
    letterDisplay.id = index.toString();
    letterDisplay.textContent = "_";
    wordDisplay.appendChild(letterDisplay);
    index++;
    // console.log(letterDisplay);
  }
  
  guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      guessFunc();
    }
  });




// for (let char of word) {
//     // console.log(char)
//     // console.log(index)
//     const guessInput = document.createElement("input");
//     guessInput.type = "text";
//     guessInput.classList.add("word-input");
//     guessInput.maxLength = 1;
//     guessInput.id = index.toString();
//     wordDisplay.appendChild(guessInput)
//     index++;
// }

// wordDisplay.addEventListener("change", function(event) {
//     const thisInput = event.target;
//     const guess = thisInput.value;
//     // console.log(guess);

//     if (guess === word[thisInput.id]) {
//         thisInput.style.backgroundColor = "green";
//         thisInput.disabled = true;
//         rightGuesses++;
//     } else {
//         if (wrongGuesses < word.length) {
//             wrongGuesses++;
//             wrongGuessDisplay.textContent = wrongGuesses;
//             hangmanImg.src = hangmanSrc[wrongGuesses];
//         }
//     }
    
//     if (wrongGuesses === word.length) {
//         wrongGuessDisplay.textContent = wrongGuesses;
//         window.setTimeout(loseReload, 100)
//     } else if (rightGuesses === word.length) {
//         window.setTimeout(winReload, 100)
//     }
// })