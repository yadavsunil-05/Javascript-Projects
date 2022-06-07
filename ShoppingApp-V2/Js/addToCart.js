const cardItems = []

const addToCart = (id) => {
  cardItems.push(id)
  document.querySelector(".cart-val").innerText = `${cardItems.length}`
}