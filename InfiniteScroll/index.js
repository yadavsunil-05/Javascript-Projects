const imgContainer = document.querySelector("#img-container");
const loader = document.querySelector("#loader");

let totalImg = 0;
let ready = true;
let imgLoaded = 0;

let photosArray = [];

//Unsplash Api
const count = 30;
const apiKey = "jDRlGs4ppK7fcdYZvu-xbdR6nzCfzyZqjybvLbahgeA";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


function loadImages() {
  imgLoaded++;
  if (imgLoaded === totalImg) {
    ready = true;
    loader.hidden = true;
  }
}

function displayPhotos() {
  imgLoaded = 0;
  totalImg = photosArray.length;
  photosArray.forEach((ele) => {
    const item = document.createElement("a");
    item.setAttribute("href", ele.links.html); //create obj and pass to func
    item.setAttribute("target", "_blank");
    const img = document.createElement("img");
    img.setAttribute("src", ele.urls.regular);
    img.setAttribute("title", ele.description);

    img.addEventListener("load", loadImages);

    imgContainer.append(item);
    item.append(img);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    photosArray = data;
    displayPhotos();
  } catch (err) {
    console.log(err);
  }
}

//check to see if scrolling near bottom of page, Load more image

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY > document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
