// Using the Order id to identify the element to update the status in.
const chefReceived = (orderIdInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(orderIdInput).innerText = 'Chef received Order'
      resolve(orderIdInput)
    }, 2000)
  })
}

const pizzaSauceAdded = (orderIdInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(orderIdInput).innerText = 'Pizza Sauce added'
      resolve(orderIdInput)
    }, 8000)
  })
}

const firstLayerOfCheeseAdded = (orderIdInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(orderIdInput).innerText = 'First layer of cheeze added'
      resolve(orderIdInput)
    }, 5000)
  })
}
const toppingsAdded = (orderIdInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(orderIdInput).innerText = 'Toppings added'
      resolve(orderIdInput)
    }, 10000)
  })
}
const secondLayerOfCheeseAdded = (orderIdInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(orderIdInput).innerText = 'Second layer of cheeze added'
      resolve(orderIdInput)
    }, 6000)
  })
}
const pizzaBaked = (orderIdInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(orderIdInput).innerText = 'Pizza Baked'
      resolve(orderIdInput)
    }, 9000)
  })
}
const oreganoAdded = (orderIdInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(orderIdInput).innerText = 'Oregano added and packed'
      resolve(orderIdInput)
    }, 8000)
  })
}
const packageReceivedAtCounter = (orderIdInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(orderIdInput).setAttribute('class', "background-color")
      document.getElementById(orderIdInput).innerText = 'Order is Ready'
      resolve(orderIdInput)
    }, 2000)
  })
}