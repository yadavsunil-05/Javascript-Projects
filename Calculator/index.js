// console.log(eval("2%2"));
let displayArea = document.getElementById("display");

function isOperator(buttonText) {
  if (
    buttonText == "+" ||
    buttonText == "-" ||
    buttonText == "/" ||
    buttonText == "%" ||
    buttonText == "*"
  ) {
    return true;
  } else {
    return false;
  }
}

function buttonClicked(buttonText) {
  if (buttonText != 'CLR' && buttonText != 'DEL' && buttonText != '=') {
    if (displayArea.innerText === "0") {
      if (buttonText != "00" && buttonText != "0") {
        //Dont do anything when 0 and 00 is pressed
        if (buttonText == "." || isOperator(buttonText))
          //if button clicked is . or any operator then show it a 0 + button clicked e.g (0.5 , 0 + )
          displayArea.innerText = display.innerText + buttonText;
        else displayArea.innerText = buttonText;
      }
    } else {
      if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText)) {
        displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;   // Ignoring last operator and adding curr pressed
      } else {
        displayArea.innerText = displayArea.innerText + buttonText;
      }
    }
  } else {
    if (buttonText === 'CLR') {
      displayArea.innerText = '0';
    }
    else if (buttonText === 'DEL') {
      displayArea.innerText = displayArea.innerText.slice(0, -1);
    }
    else if (buttonText === '=') {
      displayArea.innerText = eval(displayArea.innerText);
    }
  }
}
