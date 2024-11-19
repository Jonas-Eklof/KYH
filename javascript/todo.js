let input = document.querySelector("#input");
let button = document.querySelector(".btn");
let list = document.querySelector("#lista");

// Ladda befintliga To Dos från localStorage vid sidladdning
document.addEventListener("DOMContentLoaded", () => {
  let savedList = JSON.parse(localStorage.getItem("toDoList")) || [];
  savedList.forEach((todo) => {
    addToDo(todo.text, todo.checked);
  });
});

// Funktion för att lägga till en To Do
function addToDo(text, checked = false) {
  let item = document.createElement("li");
  item.innerText = text;

  // Om To Do är markerad som klar
  if (checked) {
    item.classList.add("checked");
  }

  // Skapa och lägg till "close"-knappen
  let span = document.createElement("span");
  span.classList.add("close");
  span.textContent = "X";

  // Ta bort todo när man trycker på "X" - uppdaterar localstorage
  span.addEventListener("click", () => {
    item.remove();
    saveToLocalStorage();
  });

  item.append(span);
  list.append(item);
}

// Skapar en To Do när knappen klickas på
button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Du måste skriva något!");
  } else {
    addToDo(input.value);
    saveToLocalStorage();
    input.value = "";
  }
});

// Spara listan till localStorage
function saveToLocalStorage() {
  let toDoList = [];
  document.querySelectorAll("#lista li").forEach((li) => {
    toDoList.push({
      text: li.firstChild.textContent.trim(),
      checked: li.classList.contains("checked"),
    });
  });
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

// Hantera "checked"-status på To Dos
list.addEventListener("click", (ev) => {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
    saveToLocalStorage();
  }
});
