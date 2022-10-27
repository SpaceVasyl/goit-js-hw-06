const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const innerThing = [];
const list = document.querySelector("#ingredients");
ingredients.forEach(ingredient => {
const element = document.createElement("li");
element.textContent = ingredient;
element.class = "item";
innerThing.push(element);
})
list.append(...innerThing);