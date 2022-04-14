// console.log(eval("2%2"));
var displayArea = document.getElementById("display");
function buttonClicked(digitOrOperator) {
  displayArea.innerText = displayArea.innerText + digitOrOperator;
}
