// console.log(eval("2%2"));
var displayArea = document.getElementById("display");
function buttonClicked(buttonText) {
  if (displayArea.innerText === "0") {
    displayArea.innerText = buttonText;
  } else {
    displayArea.innerText = displayArea.innerText + buttonText;
  }
}
