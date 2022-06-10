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

  const cartSingleDiv = document.createElement('div');
  const cartProdImgDiv = document.createElement('div');
  const cartProdImgTag = document.createElement('img');
  const cartProdBodyDiv = document.createElement('div');
  const cartProdHeaderDiv = document.createElement('div');
  const cartProdTitleH5 = document.createElement('h5')
  const cartProdPriceH4 = document.createElement('h4')
  const cartProdRemoveDiv = document.createElement('div');
  const cartRemoveBtn = document.createElement('button');


  parentCartBox.append(cartSingleDiv)
  cartSingleDiv.append(cartProdImgDiv)
  cartProdImgDiv.append(cartProdImgTag)
  cartSingleDiv.append(cartProdBodyDiv)
  cartProdBodyDiv.append(cartProdHeaderDiv)
  cartProdHeaderDiv.append(cartProdTitleH5)
  cartProdHeaderDiv.append(cartProdPriceH4)
  cartProdBodyDiv.append(cartProdRemoveDiv)
  cartProdRemoveDiv.append(cartRemoveBtn)
  cartRemoveBtn.textContent = "Remove"

  cartSingleDiv.setAttribute('id', "cartSingleItem")
  cartProdImgDiv.setAttribute("class", "cartProductImg")
  cartProdImgTag.setAttribute("class", "cartImg")
  cartProdBodyDiv.setAttribute("class", "cartProductBody")
  cartProdHeaderDiv.setAttribute("class", "cartProductHeader")
  cartProdTitleH5.setAttribute("class", "cartProductTitle")
  cartProdPriceH4.setAttribute("class", "card-title cartProductPrice")
  cartProdRemoveDiv.setAttribute("class", "cartProductRemove")
  cartRemoveBtn.setAttribute("class", "cartRemoveBtn")

  cartProdImgTag.setAttribute('src', cartProduct.image);
  cartProdImgTag.setAttribute('width', "75px");
  cartProdTitleH5.textContent = `${cartProduct.title.slice(0, 10)}...`
  cartProdPriceH4.textContent = `$${cartProduct.price}`


  cartRemoveBtn.addEventListener('click', function () {
    cartSingleDiv.style.display = "none"
  })
}


`<div id="cartSingleItem">
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

