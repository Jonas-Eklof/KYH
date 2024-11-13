const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  const li = document.createElement("li"); // skapar list item
  li.appendChild(document.createTextNode(input.value)); // skapar list items från innehållet i input-rutan
  ul.appendChild(li); // lägger till li i ul
  input.value = ""; // resets texten i input-rutan

  // igenomstreckning för avklarade todos
  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);
  // igenomstreckning slut

  // Delete-knapp
  const dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  // Lägg till delete-class (display none)
  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    // säkerställer så att en tom input-ruta inte kan skapa ett li-element
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
