let firstNameInvalid = document.getElementById('firstNameInvalid');
let firstNameValid = document.getElementById('firstNameValid');
let lastNameInvalid = document.getElementById('lastNameInvalid');
let lastNameValid = document.getElementById('lastNameValid');
let emailInvalid = document.getElementById('emailInvalid');
let emailValid = document.getElementById('emailValid');
let phoneInvalid = document.getElementById('phoneInvalid');
let phoneValid = document.getElementById('phoneValid');
let zipCodeInvalid = document.getElementById('zipCodeInvalid');
let zipCodeValid = document.getElementById('zipCodeValid');
let tncInvalid = document.getElementById("tncInvalid");
let stateInvalid = document.getElementById("stateInvalid");
let stateValid = document.getElementById("stateValid");


let validateForm = function () {
  console.log("Validated sucesfully")
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipcode = document.getElementById("zip-code").value;
  let tncCheckBox = document.getElementById("tncCheckBox").checked;

  if (firstName === "") {
    firstNameInvalid.style.display = 'block';
    firstNameValid.style.display = 'none';
  }
  else {
    firstNameValid.style.display = 'block';
    firstNameInvalid.style.display = 'none';
  }

  if (lastName === "") {
    lastNameInvalid.style.display = "block";
    lastNameValid.style.display = 'none';
  }
  else {
    lastNameValid.style.display = 'block';
    lastNameInvalid.style.display = "none";
  }

  if (email === "" || !email.includes('@') || email.startsWith('@') || !email.includes('.') ||
    email.slice(email.lastIndexOf('.')).length < 3) {  //Error Condition
    emailInvalid.style.display = 'block';
    emailValid.style.display = 'none';
  }
  else {
    emailInvalid.style.display = 'none';
    emailValid.style.display = 'block';
  }

  if (phone === "" || phone.includes('.') || phone.length != 10 || Number(phone[0]) < 6) {
    phoneInvalid.style.display = 'block';
    phoneValid.style.display = 'none';
  }
  else {
    phoneInvalid.style.display = 'none';
    phoneValid.style.display = 'block';
  }

  if (zipcode === "" || zipcode.includes('.') || zipcode.length != 6) {
    zipCodeInvalid.style.display = 'block';
    zipCodeValid.style.display = 'none';
  }
  else {
    zipCodeInvalid.style.display = 'none';
    zipCodeValid.style.display = 'block';
  }

  if (tncCheckBox === false) {
    tncInvalid.style.display = 'block'
  }
  else {
    tncInvalid.style.display = 'none'
  }

  if (state === "") {
    stateInvalid.style.display = 'block';
    stateValid.style.display = 'none';
  } else {
    stateInvalid.style.display = 'none';
    stateValid.style.display = 'block';
  }

}
