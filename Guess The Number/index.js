
let computerGuess;
let userGuess = [];

//Init Method IIFE
(function () {
  computerGuess = Math.trunc(Math.random() * 100)
  document.getElementById('newGameButton').style.display = 'none'
  document.getElementById('gameArea').style.display = 'none'
})();


const startGame = () => {
  document.getElementById('gameArea').style.display = "block";
  document.getElementById('welcomeScreen').style.display = "none"
}


const easyMode = () => {
  startGame();
}

const hardMode = () => {
  startGame();
}