const inputFontSizeChangeBar = document.querySelector("#font-size-control");
const textForChangingSize = document.querySelector("#text");


inputFontSizeChangeBar.addEventListener('input', (event) => {
   textForChangingSize.style.fontSize =  inputFontSizeChangeBar.value + "px";
});




