const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsListRef = document.querySelector("#ingredients");
let newListItem = ingredients.map((el) => {
  let li = document.createElement("li");
  li.textContent = el;
  return li;
});
ingredientsListRef.append(...newListItem);
