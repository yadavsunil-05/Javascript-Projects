let DB_User = []


const userDetails = () => {
  let name = document.querySelector('#nameInput').value
  let signEmail = document.querySelector('#signEmail').value
  let signPassword = document.querySelector('#signPassword').value
  const userObj = {
    name, signEmail, signPassword
  }
  DB_User.push(userObj)
}

const verifyDetails = () => {
  let loginEmail = document.querySelector('#loginEmail').value;
  let loginPassword = document.querySelector('#loginPassword').value

  DB_User.forEach(ele => {
    if (ele.signEmail === loginEmail && ele.signPassword === loginPassword) {
      console.log("User Verified")
    } else {
      console.log("Failed")
    }
  })

}
