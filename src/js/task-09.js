const changeColorButton = document.querySelector(".change-color");
const elementBody = document.querySelector("body")
changeColorButton.addEventListener('click', getRandomHexColor);


function getRandomHexColor(event) {
  elementBody.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
