
const lookup = {
  'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
  'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
  'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
  'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
  'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
  'Y': 'L', 'Z': 'M',
  'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
  'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
  'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
  'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
  'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
  'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
  'y': 'l', 'z': 'm',
  '0': '5', '1': '6', '2': '7', '3': '8',
  '4': '9', '5': '0', '6': '1', '7': '2',
  '8': '3', '9': '4',
  '!': '#', '$': '%', '&': '+', '-': '@',
  '_': '~', '#': '!', '%': '$', '+': '&',
  '@': '-', '~': '_'
}

let password = "";

const storePassword = () => {
  enCodepassword = document.getElementById('input-password').value;
  if (enCodepassword != "") document.getElementById('saved-password').style.display = "block";
  password = encode(enCodepassword);
  console.log(password)
}

let checkPassword = (len) => {
  if (password.length < 5) {
    document.getElementById("password-strength").style.display = "block"
    document.getElementById("password-strength").innerText = "weak"
    document.getElementById("password-strength").style.color = "red"
  }
  else if (password.length < 8) {
    document.getElementById("password-strength").style.display = "block"
    document.getElementById("password-strength").innerText = "Medium"
    document.getElementById("password-strength").style.color = "orange"
  }
  else {
    document.getElementById("password-strength").style.display = "block"
    document.getElementById("password-strength").innerText = "Strong"
    document.getElementById("password-strength").style.color = "Green"
  }
}



const validatePassword = () => {
  let decodepassword = document.getElementById("read-password").value;
  decodepassword = decode(decodepassword)
  if (decodepassword != "") {
    if (password === decodepassword) {
      document.getElementById("valid-password").style.display = 'block'
      document.getElementById("Invalid-password").style.display = 'none'
    }
    else {
      document.getElementById("valid-password").style.display = 'none'
      document.getElementById("Invalid-password").style.display = 'block'
      alert("Wrong Password !!")
    }
  }
}


let encode = (inputString) => {
  const arr = inputString.split("");
  const encodeArr = arr.map((ele) => {
    for (let key in lookup)
      if (key == ele) return lookup[key]
  })
  return encodeArr.join("")
}

let decode = (inputString) => {
  const arr = inputString.split("");
  let decodeArr = []
  for (let val of arr) {
    for (let key in lookup) {
      if (lookup[key] == val)
        decodeArr.push(key)
    }
  }
  return decodeArr.join("");
}