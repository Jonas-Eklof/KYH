let input = document.querySelector("#input");
let button = document.querySelector(".btn");
let list = document.querySelector("#lista");

button.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = input.value;
  list.append(item);
});
