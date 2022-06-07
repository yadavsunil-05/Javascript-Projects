const URL = 'https://fakestoreapi.com/products'
const loader = document.querySelector('.loader')
async function fetchProducts() {
  const response = await fetch(URL);
  const data = await response.json();
  loader.style.display = "none"
  //Data is array of objects form
  data.forEach(productObj => createProductDiv(productObj))
}




