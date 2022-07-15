let filterProduct = [...products]

const productContainer = document.querySelector('.product-container');

function createProduct() {
  console.log(filterProduct);
  productContainer.innerHTML = filterProduct
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
        <img
          src="${image}"
          class="product-img img"
          alt=""
        />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`;
    })
    .join('');
};


createProduct();


//Search Filter Logic
const form = document.querySelector('.Input-form')
const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('keyup', () => {
  let inputValue = searchInput.value;
  console.log(inputValue);
  filterProduct = products.filter(product => {
    return product.title.toLowerCase().includes(inputValue);
  })
  createProduct();
})



