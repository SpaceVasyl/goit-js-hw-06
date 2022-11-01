const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const counterValue = document.querySelector("#value");
let value = 0;
buttonDecrement.addEventListener("click", () => {
    value -= 1;
    counterValue.textContent = value;
});

buttonIncrement.addEventListener("click", () => {
    value += 1;
    counterValue.textContent = value;
});

