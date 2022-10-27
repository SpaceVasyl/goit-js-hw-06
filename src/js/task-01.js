const list = document.querySelector("#categories");
const categor = document.querySelectorAll(".item");

console.log(("Number of categories:"), (list.children.length));
categor.forEach(el => {
    console.log(("Category:"), (el.querySelector("h2").textContent))
    console.log(("Elements:"), (el.querySelectorAll("li").length))
})