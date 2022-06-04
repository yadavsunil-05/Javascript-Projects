let apiQuotes = [];
const quoteSpan = document.querySelector("#quote");
const authorSpan = document.querySelector("#author");
const newQuoteBtn = document.querySelector('#new-quote')
let flagErr = false

//Show new quotes
function newQuotes() {
  let index = Math.floor(Math.random() * apiQuotes.length); // 0 to 1643
  const quote = apiQuotes[index];
  checkFontSize(quote.text);
  quoteSpan.textContent = quote.text;
  authorSpan.textContent = quote.author ? `-${quote.author}` : `-Unknown`;
}

function newQuotesLocally() {
  let indx = Math.floor(Math.random() * localQuotes.length);
  checkFontSize(localQuotes[indx].text);
  quoteSpan.textContent = localQuotes[indx].text;
  authorSpan.textContent = localQuotes[indx].author
    ? `-${localQuotes[indx].author}`
    : `-Unknown`; //if author is null
}

getQuotes();

// Get Quotes from APi
async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
  } catch (error) {
    flagErr = true;
    console.log(error);
  }
}

function checkFontSize(quotetxt) {
  if (quotetxt.length > 120) {
    quoteSpan.classList.add('long-quote')
  } else {
    quoteSpan.classList.remove('long-quote')
  }
}

newQuoteBtn.addEventListener('click', () => {
  (!flagErr) ? newQuotes() : newQuotesLocally();
})