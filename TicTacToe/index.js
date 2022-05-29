let turnping = new Audio("ting.mp3");
let turn = "X";
let gameOver = false;

//Function to change Turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to check win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  console.log(boxtext);
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((mat) => {
    if (
      (boxtext[mat[0]].innerText === boxtext[mat[1]].innerText) && (boxtext[mat[1]].innerText === boxtext[mat[2]].innerText) && (boxtext[mat[0]].innerText !== "")
    ) {
      document.getElementById("changeText").innerText = ` Hurray!!! ${boxtext[mat[0]].innerText}  Won.🏆`;
      gameOver = true;
      document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "45%"
      setTimeout(() => {
        resetTicTacToe()
      }, 4000)
    }
  });
};

//Logic behind the tictactoe
let boxes = document.getElementsByClassName("box");
//return collection converting in array
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnping.play();
      checkWin();
      if (!gameOver) document.getElementById("changeText").innerText = `Turn For : ${turn}`;
    }
  });
});



//Adding Onclick EventListner on reset Button
const resetTicTacToe = () => {
  window.location.reload()
}