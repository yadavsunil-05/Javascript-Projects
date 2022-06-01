/*
          Order placed
          After 2s -> Chef received the order and started preparing
          After 10s -> Pizza Sauce added
          After 5s -> First layer of cheeze added
          After 12s -> Toppings added
          After 5s -> Second layer of cheeze added
          After 15s -> Pizza baked!
          After 8s -> Oregano added and packed
          The order is ready and handed over to the Zomato guy!
*/

const addClassDone = (index) => {
  document.getElementsByClassName("track")[index].classList.add("done");
};

const displayOrderStatus = () => {
  for (let i = 0; i < document.getElementsByClassName("track").length; i++) {
    setTimeout(() => {
      document.getElementsByClassName("track")[i].classList.add("block");
    }, i * 1000);
  }
};

function func() {
  addClassDone(8);
}

const executeOrder = (callback) => {
  let orderNo = document.getElementById("order-id-input").value;
  document.getElementById(
    "orderIdInfo"
  ).innerText = `Status For Order Id : ${orderNo}`;
  displayOrderStatus();
  addClassDone(0);
  setTimeout(function () {
    addClassDone(1);
    setTimeout(function () {
      addClassDone(2);
      setTimeout(function () {
        addClassDone(3);
        setTimeout(function () {
          addClassDone(4);
          setTimeout(function () {
            addClassDone(5);
            setTimeout(function () {
              addClassDone(6);
              setTimeout(function () {
                addClassDone(7);
                callback();
              }, 8000);
            }, 15000);
          }, 5000);
        }, 12000);
      }, 5000);
    }, 10000);
  }, 4000);
};
