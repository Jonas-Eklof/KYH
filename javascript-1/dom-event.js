window.onload = () => {
  const titleElement = document.querySelector("h1");
  titleElement.textContent = "Sidan är laddad";

  const section = document.getElementById("section");
  section.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, totam.";
};

const button = document.getElementById("button");
const lista = document.getElementById("lista");

let itemCount = 0;

button.addEventListener("click", () => {
  itemCount++;
  let newLi = document.createElement("li");
  newLi.innerText = `item ${itemCount}`;
  lista.appendChild(newLi);
});

let divButton = document.getElementById("div-button");
let divar = document.getElementsByClassName("divar");
let originalContent = true;

divButton.addEventListener("click", () => {
  Array.from(divar).forEach((div) => {
    if (originalContent) {
      div.innerHTML = "<strong>Original Content</strong>";
    } else {
      div.innerHTML = "<i>Toggled Content</i>";
    }
  });

  originalContent = !originalContent;
});

let articleButton = document.getElementById("article-button");

articleButton.addEventListener("click", () => {
  articleButton.classList.toggle("active");
});

let sectionButton = document.querySelector(".section-button");
let sections = document.getElementsByTagName("section");

sectionButton.addEventListener("click", () => {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.toggle("active");
  }
});

let childButton = document.getElementById("btn");
let output = document.getElementById("output");
let childList = document.getElementById("list");

childButton.addEventListener("click", () => {
  output.innerHTML = "";

  output.innerHTML += `<p>Antal childNodes: ${childList.childNodes.length}</p>`;

  output.innerHTML += `<p>NodeNames för childNodes:</p><ul>`;
  Array.from(childList.childNodes).forEach((node) => {
    output.innerHTML += `<li>${node.nodeName}</li>`;
  });
  output.innerHTML += "</ul>";

  output.innerHTML += `<p>Antal children: ${childList.children.length}</p>`;

  output.innerHTML += "<p>NodeNames för children:</p><ul>";
  Array.from(childList.children).forEach((child) => {
    output.innerHTML += `<li>${child.nodeName}</li>`;
  });
  output.innerHTML += "</ul>";

  Array.from(childList.children).forEach((child) => {
    child.textContent += "!";
  });
});
