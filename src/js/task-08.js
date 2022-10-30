const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") {
        alert("Please fill in all the fields!")
    }
    const logInForm = {
        Email: event.currentTarget.email.value,
        Password: event.currentTarget.password.value,
    }
    console.log(logInForm);
    event.currentTarget.reset();
}