// Get the subscribe button once when the page loads
const subscribeButton = document.querySelector(".js-subscribe-button");
const calculateButton = document.querySelector(".js-calculate-button");
const priceInput = document.querySelector(".js-price-input");

priceInput.onkeydown = function (event) {
  if (event.key === "Enter") {
    calculateButtonClicked();
  }
};

// Add click event listener to the button
subscribeButton.addEventListener("click", subscribeButtonClicked);
calculateButton.addEventListener("click", calculateButtonClicked);

function subscribeButtonClicked() {
  // Since we already have button reference, no need to query again
  if (subscribeButton.textContent === "Subscribe") {
    subscribeButton.textContent = "Subscribed";
    subscribeButton.classList.add("is-subscribed");
  } else {
    subscribeButton.textContent = "Subscribe";
    subscribeButton.classList.remove("is-subscribed");
  }
}

//if price with shipping is greater than 40, free shipping
//otherwise, shipping cost is 10
function calculateButtonClicked() {
  const priceOutput = document.querySelector(".js-price-output");
  const price = parseFloat(priceInput.value) || 0;
  const priceWithShipping = price + 10;
  if (priceWithShipping > 40) {
    priceOutput.textContent = `$${price}`;
  } else {
    priceOutput.textContent = `$${priceWithShipping}`;
  }
}
