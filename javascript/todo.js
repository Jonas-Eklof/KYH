let input = document.querySelector("#input");
let button = document.querySelector(".btn");
let list = document.querySelector("#lista");
input.value = "";

// Skapar en To Do-list item när knappen klickas på.
button.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = input.value;

  // Skapa och lägg till en "close"-knapp
  let span = document.createElement("span");
  let text = document.createTextNode("X");
  //   let span = document.querySelectorAll("span");
  span.classList.add("close");

  if (input.value === "") {
    alert("Du måste skriva något!");
  } else {
    span.append(text);
    item.append(span);
    list.append(item);
    input.value = "";
  }

  span.addEventListener("click", () => {
    item.style.display = "none";
  });
});

list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
