let computerGuess;
let userGuess = [];
let maxGuess;
let userUpdate = document.getElementById("textOutput");
let userInputToEmpty = document.getElementById("inputBox");

//Init Method IIFE
(function () {
  computerGuess = Math.trunc(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
})();

const startGame = () => {
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("welcomeScreen").style.display = "none";
};

//Logic Behind the App
const compareGuess = () => {
  let userNum = Number(document.getElementById("inputBox").value);
  let arrlength = userGuess.push(userNum); // userGuess = [...userGuess,userNum]  Spread Operator
  document.getElementById("guesses").innerText = userGuess.join(" ");
  //Comparing the User Guess with the target(computerGuess)
  if (arrlength < maxGuess) {
    if (userNum > computerGuess) {
      userUpdate.innerText = "Your guess is High 😲";
    } else if (userNum < computerGuess) {
      userUpdate.innerText = "Your guess is Low 😌";
    } else {
      userUpdate.innerText = "It's Correct 😀";
    }
  } else {
    if (userNum > computerGuess) {
      userUpdate.innerText = `You Loose!! Correct number was ${computerGuess}.`;
    } else if (userNum < computerGuess) {
      userUpdate.innerText = `You Loose!! Correct number was ${computerGuess}.`;
    } else {
      userUpdate.innerText = "It's Correct 😀";
    }
  }
  userInputToEmpty.value = ""; //Deleting the text in input box
  document.getElementById("attempts").innerText = arrlength;
};

const easyMode = () => {
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  maxGuess = 5;
  startGame();
};
