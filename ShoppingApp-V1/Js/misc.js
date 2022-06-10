document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    // document.querySelector(this.getAttribute('href')).scrollIntoView({
    //   behavior: 'smooth'
    // });
  });
});

const cart = document.querySelector('.fa-shopping-cart')

cart.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'block'
})