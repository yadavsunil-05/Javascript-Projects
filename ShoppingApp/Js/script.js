const URL = 'https://fakestoreapi.com/products'

async function fetchProducts() {
  const response = await fetch(URL);
  const data = await response.json();
  //Data is array of objects form
  data.forEach(productObj => createProductDiv(productObj))

}

fetchProducts()


