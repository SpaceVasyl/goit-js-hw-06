const inputLengthChecker = document.querySelector("[data-length='6']")

const changeBarColour = (event) => { 
    if (inputLengthChecker.dataset.length == event.target.value.length) {
        inputLengthChecker.classList.add("valid");
        return;
    }
        inputLengthChecker.classList.add("invalid");
}

const removeClasses = (event) => {
    inputLengthChecker.classList.remove("valid");
    inputLengthChecker.classList.remove("invalid");
}
inputLengthChecker.addEventListener("focus", removeClasses);
inputLengthChecker.addEventListener("blur", changeBarColour);