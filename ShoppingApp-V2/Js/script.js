const URL = 'https://fakestoreapi.com/products'
const loader = document.querySelector('.loader')
let globalProduct = [];  //Storing Data Gobally
async function fetchProducts() {
  const response = await fetch(URL);
  const data = await response.json();
  globalProduct = data;
  loader.style.display = "none"
  data.forEach(productObj => createProductDiv(productObj))
}



