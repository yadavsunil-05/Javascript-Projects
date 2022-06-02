const button = document.querySelector(".btn-container button");
const parentDiv = document.querySelector("#main-container-row");
let index = 0;
//Append Prepend Before After
button.addEventListener("click", () => {
  let orderIdInput = document.querySelector(".order-id-input").value;
  if (orderIdInput.length == 0) {
    alert("Please Enter Order Id!")
    return
  }
  document.querySelector("#empty-order-gif").style.display = "none";
  createNewOrderColumn(orderIdInput);

  console.log("order placed")
  chefReceived(orderIdInput)
    .then(pizzaSauceAdded)
    .then(firstLayerOfCheeseAdded)
    .then(toppingsAdded)
    .then(secondLayerOfCheeseAdded)
    .then(pizzaBaked)
    .then(oreganoAdded)
    .then(packageReceivedAtCounter)
    .catch((err) => { console.log(err) })
});

const createNewOrderColumn = (orderIdInput) => {
  let colDiv = document.createElement("div");
  let cardDiv = document.createElement("div");

  let cardHeaderDiv = document.createElement("div");
  cardHeaderDiv.textContent = `Order Id : ${orderIdInput}`;

  let cardBodyDiv = document.createElement("div");
  let h5 = document.createElement("h5");
  h5.textContent = "Bill Amount: $150";
  let p = document.createElement("p");
  p.textContent = "Items:Pizza,Coke";
  let statusDiv = document.createElement("div");
  statusDiv.textContent = "The Status will get Updated.";
  cardBodyDiv.append(h5);
  cardBodyDiv.append(p);
  cardBodyDiv.append(statusDiv);

  let cardFooter = document.createElement("div");
  let button = document.createElement("a");
  button.textContent = "Cancel Button";
  cardFooter.append(button);

  cardDiv.append(cardHeaderDiv);
  cardDiv.append(cardBodyDiv);
  cardDiv.append(cardFooter);
  colDiv.append(cardDiv);
  parentDiv.append(colDiv);

  //Adding Class To newlly created Nodes
  colDiv.setAttribute("class", "col-md-3 col-xs-12 order-block");
  cardDiv.setAttribute("class", "card text-center");
  cardHeaderDiv.setAttribute("class", "card-header");
  cardBodyDiv.setAttribute("class", "card-body");
  h5.setAttribute("class", "card-title");
  p.setAttribute("class", "card-text");
  statusDiv.setAttribute("class", "badge bg-success order-status");
  statusDiv.setAttribute("id", orderIdInput)
  button.setAttribute("class", "btn btn-danger cancel-btn");
  cardFooter.setAttribute("class", "card-footer text-muted");

  // Cancel button event handler
  button.addEventListener('click', () => {
    colDiv.style.display = 'none'
  })
};

