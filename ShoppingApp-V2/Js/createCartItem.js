const cartBtn = document.querySelector('.fa-shopping-cart')
const cartModal = document.querySelector('#cartSimpleModal')
const parentCartBox = document.querySelector('.cartModelContent')

//Opening the cart modal
cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'block'
})

//close the cart modal
cartModal.addEventListener('click', () => {
  cartModal.style.display = 'none'
}, true)

const createCartItem = (cartProduct) => {
  const cartContainer = `
<div id="cartSingleItem">
  <div class="cartProductImg">
    <img width="75px" class="cartImg">
  </div>
  <div class="cartProductBody">
    <div class="cartProductHeader">
      <h5 class="cartProductTitle"></h5>
      <h4 class="card-title cartProductPrice"></h4>
    </div>
    <div class="cartProductRemove">
      <button class="cartRemoveBtn">Remove</button>
    </div>
  </div>
</div>
`
  parentCartBox.insertAdjacentHTML("beforeend", cartContainer)

  const cartProdImg = document.querySelector('.cartImg')
  const cartProductTitle = document.querySelector('.cartProductTitle')
  const cartProductPrice = document.querySelector('.cartProductPrice')

  cartProdImg.setAttribute('src', cartProduct.image);
  cartProductTitle.textContent = `${cartProduct.title.slice(0, 10)}...`
  cartProductPrice.textContent = `$${cartProduct.price}`
}

