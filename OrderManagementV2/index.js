const button = document.querySelector(".btn-container button")
const orderBlock = document.querySelectorAll(".order-block")
const cardHeader = document.querySelectorAll(".card-header")
const orderIdInput = document.querySelector(".order-id-input")

console.log(orderBlock)
console.log(cardHeader)
let cnt = 0;
button.addEventListener('click', () => {
  cardHeader[cnt].textContent = ` Order Id:${orderIdInput.value}`
  orderBlock[cnt].style.display = "block"
  cnt++;
})
