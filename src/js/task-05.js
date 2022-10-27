const nameInputBar = document.querySelector("#name-input");
const nameOutputBar = document.querySelector("#name-output");

const printInputBar = (event) => { 
    if (event.target.value === "") {
        nameOutputBar.textContent = "Anonymous";
        return;
    }
    nameOutputBar.textContent = event.target.value;
}

nameInputBar.addEventListener("input", printInputBar) 

