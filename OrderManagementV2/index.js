const button = document.querySelector(".btn-container button");
const parentDiv = document.querySelector("#main-container-row");
let index = 0
//Append Prepend Before After
button.addEventListener("click", () => {
  let orderIdInput = document.querySelector(".order-id-input");
  createNewOrderColumn(orderIdInput);
});


const createNewOrderColumn = (orderIdInput) => {

  let colDiv = document.createElement("div");
  let cardDiv = document.createElement("div");

  let cardHeaderDiv = document.createElement("div");
  // cardHeaderDiv.textContent = "Order Id:";


  let cardBodyDiv = document.createElement("div");
  let h5 = document.createElement("h5");
  h5.textContent = "Bill Amount:";
  let p = document.createElement("p");
  p.textContent = "Items:Pizza,Coke";
  let button = document.createElement("a");
  button.textContent = "Cancel Order";
  cardBodyDiv.append(h5);
  cardBodyDiv.append(p);
  cardBodyDiv.append(button);

  let cardFooter = document.createElement("div");
  cardFooter.textContent = "Pizza Baked";

  cardDiv.append(cardHeaderDiv);
  cardDiv.append(cardBodyDiv);
  cardDiv.append(cardFooter);
  colDiv.append(cardDiv);
  parentDiv.append(colDiv)

  //Adding Class To newlly created Nodes
  colDiv.setAttribute("class", "col-md-3 col-xs-12 order-block")
  cardDiv.setAttribute("class", "card text-center")
  cardHeaderDiv.setAttribute("class", "card-header")
  cardBodyDiv.setAttribute("class", "card-body")
  h5.setAttribute('class', "card-title")
  p.setAttribute("class", "card-text")
  button.setAttribute("class", "btn btn-danger")
  cardFooter.setAttribute("class", "card-footer text-muted")

  //Displaying the order id 
  document.querySelectorAll('.card-header')[index++].textContent = `Order Id : ${orderIdInput.value}`

  //Cancel button event handler
  document.querySelectorAll('.btn-danger').forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.parentNode.parentNode.parentNode.remove())
    })
  })
}




