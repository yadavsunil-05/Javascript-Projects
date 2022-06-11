const cartBtn = document.querySelector(".fa-shopping-cart");
const cartCloseBtn = document.querySelector(".cartCloseBtn i");
const parentCartBox = document.querySelector(".cartModelContent");
const cartModal = document.querySelector("#cartSimpleModal");
//Opening the cart modal
cartBtn.addEventListener("click", () => {
  cartModal.style.display = "block";
});

//close the cart modal
cartCloseBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

const createCartItem = (cartProduct) => {
  document.querySelector(".cart-empty-img").style.display = "none";

  const cartSingleDiv = document.createElement("div");
  const cartProdImgDiv = document.createElement("div");
  const cartProdImgTag = document.createElement("img");
  const cartProdBodyDiv = document.createElement("div");
  const cartProdHeaderDiv = document.createElement("div");
  const cartProdTitleH5 = document.createElement("h5");
  const cartProdPriceH4 = document.createElement("h4");
  const cartProdRemoveDiv = document.createElement("div");
  const cartRemoveBtn = document.createElement("button");

  parentCartBox.append(cartSingleDiv);
  cartSingleDiv.append(cartProdImgDiv);
  cartProdImgDiv.append(cartProdImgTag);
  cartSingleDiv.append(cartProdBodyDiv);
  cartProdBodyDiv.append(cartProdHeaderDiv);
  cartProdHeaderDiv.append(cartProdTitleH5);
  cartProdHeaderDiv.append(cartProdPriceH4);
  cartProdBodyDiv.append(cartProdRemoveDiv);
  cartProdRemoveDiv.append(cartRemoveBtn);
  cartRemoveBtn.textContent = "Remove";

  cartSingleDiv.setAttribute("id", "cartSingleItem");
  cartProdImgDiv.setAttribute("class", "cartProductImg");
  cartProdImgTag.setAttribute("class", "cartImg");
  cartProdBodyDiv.setAttribute("class", "cartProductBody");
  cartProdHeaderDiv.setAttribute("class", "cartProductHeader");
  cartProdTitleH5.setAttribute("class", "cartProductTitle");
  cartProdPriceH4.setAttribute("class", "card-title cartProductPrice");
  cartProdRemoveDiv.setAttribute("class", "cartProductRemove");
  cartRemoveBtn.setAttribute("class", "cartRemoveBtn");

  cartProdImgTag.setAttribute("src", cartProduct.image);
  cartProdImgTag.setAttribute("width", "75px");
  cartProdTitleH5.textContent = `${cartProduct.title.slice(0, 15)}...`;
  cartProdPriceH4.textContent = `$${cartProduct.price}`;

  //Logic for Removing the cart item
  cartRemoveBtn.addEventListener("click", function () {
    parentCartBox.removeChild(cartSingleDiv);
    cardItems = cardItems.filter((cartItemid) => cartItemid != cartProduct.id);
    // This will only return the id which are present on dom/cart and the deleted cart product id will get remove from array
    document.querySelector(".cart-val").innerText = `${cardItems.length}`; //Updating the length of cart
    //Removing the Checked green button which product are removed from cart
    const cardbtn = document.querySelector(
      `#product-${cartProduct.id} .add-to-cart-btn`
    );
    cardbtn.innerHTML = '<i class="fa fa-cart-plus"><i>';
    cardbtn.setAttribute("class", "btn btn-primary add-to-cart-btn"); //use classlist

    if (cardItems.length == 0) {
      document.querySelector(".cart-empty-img").style.display = "block";
    }
  });
};

// cardbtn.classList.remove = 'disabled'
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
`;
