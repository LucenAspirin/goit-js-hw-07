let counterPlus = document.querySelector("[data-action=increment]");
let counterMinus = document.querySelector("[data-action=decrement]");
let counterSpan = document.querySelector("#value");
let counterValue = 0;
const increment = () => {
  counterValue = ++counterSpan.textContent;
};
const decrement = (event) => {
  if (counterValue > 0)
    counterValue = --counterSpan.textContent;
};
counterPlus.addEventListener("click", increment);
counterMinus.addEventListener("click", decrement);
