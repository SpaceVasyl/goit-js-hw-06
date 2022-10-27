const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const counterValue = document.querySelector("#value");
buttonDecrement.addEventListener("click", () => {
    counterValue.textContent -= 1;
});

buttonIncrement.addEventListener("click", () => {
     counterValue.textContent = parseInt(counterValue.textContent) + 1;
});