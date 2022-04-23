
let validateForm = function () {
  console.log("Validetede sucesfully")
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipcode = document.getElementById("zip-code").value;
  console.log(firstName, lastName, email, phone, state, zipcode);
}