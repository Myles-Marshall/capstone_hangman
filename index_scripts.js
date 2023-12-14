const signUpWrap = document.getElementById("sign-up-wrap");
const logInWrap = document.getElementById("log-in-wrap");
const signUpUserInput = document.getElementById("name-sign-up");
const signUpPassInput = document.getElementById("password-sign-up");
const logInUser = document.getElementById("name-input");
const logInPass = document.getElementById("password-input");

const signUpButton = document.getElementById("sign-up-button");
const logInButton = document.getElementById("log-in-button");

const toLogIn = document.getElementById("to-login");
const toSignUp = document.getElementById("to-signup");



function checkCreds(username, password) {
    return localStorage.getItem(username) === password;
}

function signUp() {
    var newUsername = signUpUserInput.value;
    var newPassword = signUpPassInput.value;

    if (localStorage.getItem(newUsername)) {
        alert("username already exists");
    } else {
        localStorage.setItem(newUsername, newPassword)
        alert("Account created. Log in to get to the Hangman Game.")
        signUpWrap.style.display = "none";
        logInWrap.style.display = "block";
    }
}

function logIn() {
    var username = logInUser.value;
    var password = logInPass.value;

    if (checkCreds(username, password)) {
        window.location.href = "game.html"
    } else {
        alert("incorrect username or password")
    }
}


toLogIn.addEventListener("click", function() {
    signUpWrap.style.display = "none";
    logInWrap.style.display = "block";
})

toSignUp.addEventListener("click", function() {
    signUpWrap.style.display = "block";
    logInWrap.style.display = "none";
})