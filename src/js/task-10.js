const demiurgButton = document.querySelector("[data-create]");
const inputNumberOFBlocks = document.querySelector("input");
const wrapperForNewEls = document.querySelector("#boxes");
const destroyer = document.querySelector("[data-destroy]");
demiurgButton.addEventListener('click', createBlocks);
const boxes = [];
function createBlocks(event) {
  let size = 30;
 for (let i = 0; i < inputNumberOFBlocks.value; i++) {
   size = 30 + 10 * i;
   const markUp = `<div class="newBox" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
   boxes.push(markUp);
  }
  wrapperForNewEls.insertAdjacentHTML("beforeend", boxes.join(""));
}

const wrapperForNewElsChildrens = document.querySelector("wrapperForNewEls.children")
destroyer.addEventListener('click', destroyBoxes);


function destroyBoxes(event) {
  wrapperForNewEls.remove(wrapperForNewEls.children);
  inputNumberOFBlocks.value = null;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// box.style.backgroundColor = getRandomHexColor();
//    box.style.width = 30 + i * 10 + "px";
//    box.style.height = 30 + i * 10 + "px";