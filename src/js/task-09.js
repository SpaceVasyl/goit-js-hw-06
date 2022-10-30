const changeColorButton = document.querySelector(".change-color");
const elementBody = document.querySelector("body")
changeColorButton.addEventListener('click', getRandomHexColor);
const textContentForSpan = document.querySelector(".color")

function getRandomHexColor(event) {
  const blabla = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  elementBody.style.backgroundColor = blabla;
  textContentForSpan.textContent = blabla;
}
