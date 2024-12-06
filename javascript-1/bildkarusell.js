let bildIndex = 1;
bildkarusell(bildIndex);

// Previus/Next
function bytBild(n) {
  bildkarusell((bildIndex += n));
}

function aktuellBild(n) {
  bildkarusell((bildIndex = n));
}

function bildkarusell(n) {
  let bilder = document.querySelectorAll("img");
  if (n > bilder.length) {
    bildIndex = 1;
  }
  if (n < 1) {
    bildIndex = bilder.length;
  }
  for (let i = 0; i < bilder.length; i++) {
    bilder[i].style.display = "none";
  }
  let antal = document.getElementById("antal-bilder");
  bilder[bildIndex - 1].style.display = "block";
  antal.textContent = `${bildIndex} / ${bilder.length}`;
}
