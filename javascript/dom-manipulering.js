let heading = document.getElementById("heading");
heading.innerText = "Ändrar texten med 'innerText'";

let div = document.createElement("div");
document.body.appendChild(div);
div.innerText = "Detta är en div.";

// heading.remove();
heading.style.backgroundColor = "red";
heading.style.fontSize = "50px";

div.classList.add("bold");
div.classList.remove("bold");

let list = document.createElement("ul");
list.innerHTML = "<li>List item 1</li><li>List item 2</li>";

document.body.appendChild(list);

let image = document.getElementById("image");
let link = document.getElementById("link");

image.setAttribute("src", "https://picsum.photos/200");
let section = document.createElement("section");
document.body.appendChild(section);
section.innerText = "getAttribute från länk: " + link.getAttribute("href");

let knapp = document.getElementById("knapp");
knapp.addEventListener("click", () => {
  alert("Du klickade på knappen!");
});

let inputField = document.getElementById("input-field");
let inputKnapp = document.getElementById("input-button");

inputKnapp.addEventListener("click", () => {
  let p = document.createElement("p");
  p.innerText = inputField.value;
  document.body.appendChild(p);
});
