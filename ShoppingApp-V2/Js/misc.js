document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    // document.querySelector(this.getAttribute('href')).scrollIntoView({
    //   behavior: 'smooth'
    // });
  });
});


// <----------------Modal ---------------->

const signUpBtn = document.querySelector('#signUp')
const modal = document.querySelector('#simpleModal')
const closeBtn = document.querySelector(".closeBtn i")
const body = document.body
console.log(body)

signUpBtn.addEventListener('click', () => {
  modal.style.display = "block"
})


closeBtn.addEventListener('click', () => {
  modal.style.display = "none"
})