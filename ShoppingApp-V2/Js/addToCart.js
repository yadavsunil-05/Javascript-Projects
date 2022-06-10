const cardItems = []

const addToCart = (id) => {
  cardItems.push(id)
  document.querySelector(".cart-val").innerText = `${cardItems.length}`
  let singleProdObj = globalProduct.find(ele => ele.id === id)
  createCartItem(singleProdObj)
}


/*
Single Object Imformation()
{
  category: "men's clothing"
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  id: 1
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  price: 109.95
  rating: {rate: 3.9, count: 120}
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
}
*/