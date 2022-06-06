const rowContainer = document.querySelector('#products')

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

const createProductDiv = (productObj) => {
  const colDiv = document.createElement("div")
  const cardDiv = document.createElement("div")
  const cardImg = document.createElement('img')
  const cardBodydiv = document.createElement("div")
  const cardHeaderDiv = document.createElement("div")
  const cardHeaderh5 = document.createElement("h5")
  const cardHeaderh4 = document.createElement("h4")
  const cardText = document.createElement('p')
  const star1span = document.createElement("span")
  const star2span = document.createElement("span")
  const star3span = document.createElement("span")
  const star4span = document.createElement("span")
  const star5span = document.createElement("span")
  const starCnt = document.createElement("span")
  const btnDiv = document.createElement("div")
  const btnCart = document.createElement("a")
  const btnBuy = document.createElement("a")

  rowContainer.append(colDiv)
  colDiv.append(cardDiv)
  cardDiv.append(cardImg)
  cardDiv.append(cardBodydiv)
  cardBodydiv.append(cardHeaderDiv)
  cardHeaderDiv.append(cardHeaderh5)
  cardHeaderDiv.append(cardHeaderh4)
  cardBodydiv.append(cardText)
  cardBodydiv.append(star1span)
  cardBodydiv.append(star2span)
  cardBodydiv.append(star3span)
  cardBodydiv.append(star4span)
  cardBodydiv.append(star5span)
  cardBodydiv.append(starCnt)
  cardBodydiv.append(btnDiv)
  btnDiv.append(btnCart)
  btnDiv.append(btnBuy)

  cardHeaderh5.textContent = `${productObj.title.slice(0, 20)}...`
  cardHeaderh4.textContent = `$${productObj.price}`
  cardText.textContent = `${(productObj.description).slice(0, 30)}...`
  starCnt.textContent = `(${productObj.rating.count})`
  btnCart.textContent = "Add to Cart"
  btnBuy.textContent = "Buy Now"

  cardImg.setAttribute("src", productObj.image)
  cardImg.setAttribute("alt", "Product Image")


  colDiv.setAttribute("id", `product-${productObj.id}`)
  colDiv.setAttribute("class", "col-md-3")
  cardDiv.setAttribute("class", "card product")
  cardImg.setAttribute("class", "card-img-top")
  cardBodydiv.setAttribute("class", "card-body")
  cardHeaderDiv.setAttribute("class", "product-header")
  cardHeaderh5.setAttribute("class", "card-title")
  cardHeaderh4.setAttribute("class", "card-title product-price")
  cardText.setAttribute("class", "card-text")
  star1span.setAttribute("class", "fa fa-star checked")
  star2span.setAttribute("class", "fa fa-star checked")
  star3span.setAttribute("class", "fa fa-star checked")
  star4span.setAttribute("class", "fa fa-star checked")
  star5span.setAttribute("class", "fa fa-star checked")
  btnDiv.setAttribute("class", "btn-container")
  btnCart.setAttribute("class", "btn btn-primary add-to-cart-btn")
  btnBuy.setAttribute("class", "btn btn-primary")
}


