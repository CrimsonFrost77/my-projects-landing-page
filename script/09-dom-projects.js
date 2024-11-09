// Get the subscribe button once when the page loads
const subscribeButton = document.querySelector(".js-subscribe-button");
const calculateButton = document.querySelector(".js-calculate-button");
const priceInput = document.querySelector(".js-price-input");
const priceOutput = document.querySelector(".js-price-output");

// Add click event listener to the button
subscribeButton.addEventListener("click", subscribeButtonClicked);
calculateButton.addEventListener("click", calculateButtonClicked);

function subscribeButtonClicked() {
  // Since we already have button reference, no need to query again
  if (subscribeButton.textContent === "Subscribe") {
    subscribeButton.textContent = "Subscribed";
  } else {
    subscribeButton.textContent = "Subscribe";
  }
}

//if price with shipping is greater than 40, free shipping
//otherwise, shipping cost is 10
function calculateButtonClicked() {
  const price = parseFloat(priceInput.value);
  const priceWithShipping = price + 10;
  if (priceWithShipping > 40) {
    priceOutput.textContent = `$${price}`;
  } else {
    priceOutput.textContent = `$${priceWithShipping}`;
  }
}
