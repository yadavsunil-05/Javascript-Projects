document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    // document.querySelector(this.getAttribute('href')).scrollIntoView({
    //   behavior: 'smooth'
    // });
  });
});


// <----------------Modal ---------------->

const ModalPage = document.querySelector('#ModalPage')
const modal = document.querySelector('#simpleModal')
const closeBtn = document.querySelector(".closeBtn i")
const body = document.body

const modalLogIn = document.querySelector('#modalLogIn')
const modalSignUp = document.querySelector('#modalSignUp')
const nameInput = document.querySelector('#nameInput')
const submitForm = document.querySelector('#submitForm')

ModalPage.addEventListener('click', () => {
  modal.style.display = "block"
})

closeBtn.addEventListener('click', () => {
  modal.style.display = "none"
})


submitForm.addEventListener('click', () => {
  document.querySelector(".successSignIn").style.display = "block"
  document.querySelector('.form-container').style.display = "none"
  modalLogIn.style.display = "block"
  modalSignUp.style.display = "none"
})

modalLogIn.addEventListener('click', () => {
  document.querySelector(".successSignIn").style.display = "none"
  document.querySelector('.form-container').style.display = "block"
  nameInput.style.display = "none";
})
