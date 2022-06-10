document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // document.querySelector(this.getAttribute('href')).scrollIntoView({
    //   behavior: 'smooth'
    // });
  });
});


// <----------------Modal ---------------->
let ModalPage = document.querySelector("#ModalPage");

ModalPage.addEventListener("click", () => {
  modalFunction()
});

const modalFunction = () => {
  const modal = document.querySelector("#simpleModal");
  const closeBtn = document.querySelector(".closeBtn i");
  const modalSignUp = document.querySelector("#modalSignUp");
  const submitForm = document.querySelector("#submitForm");
  const LogInBtn = document.querySelector("#LogInBtn");

  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  submitForm.addEventListener("click", () => {
    document.querySelector(".successSignIn").style.display = "block";
    document.querySelector(".form-container").style.display = "none";
    closeBtn.style.display = "none";
    modalSignUp.style.display = "none";
    setTimeout(() => {
      closeBtn.style.display = "block";
      modalLogIn.style.display = "block";
      document.querySelector(".successSignIn").style.display = "none";
      document.querySelector(".form-container").style.display = "none";
      document.querySelector(".form-container-Login").style.display = "block";
    }, 4000)
  });

  LogInBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    modalLogIn.style.display = "none";
    document.querySelector(".form-container-Login").style.display = "none";
    document.querySelector(".successLogIn").style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
    }, 4000);
  });
}

