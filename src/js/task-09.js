const changeColorButton = document.querySelector(".change-color");
const elementBody = document.querySelector("body")
const textContentForSpan = document.querySelector(".color")
changeColorButton.addEventListener('click', getRandomHexColor);
function getRandomHexColor(event) {
  const colorRandomiser = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  elementBody.style.backgroundColor = colorRandomiser;
  textContentForSpan.textContent = colorRandomiser;
}
