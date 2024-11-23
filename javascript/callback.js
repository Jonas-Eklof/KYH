// Uppgift 1

function doAfterDelay(callback, delay) {
  setTimeout(callback, delay);
}

function conlog() {
  console.log("Detta ska kallas efter en delay");
}

// doAfterDelay(conlog, 3000);

// Uppgift 2

const lista = [1, 2, 3, 4, 5, 6];

function listarSiffror(callback) {
  console.log(callback);
}

// lista.forEach(listarSiffror);

// Uppgift 3
const lista2 = ["ett", "två", "tre", "fyra"];

function processElements(arr, callback) {
  arr.forEach(callback);
}

function uppercase(element, index, array) {
  console.log((array = element.toUpperCase()));
}

// processElements(lista2, uppercase);

// Uppgift 4

function simulateAsyncOperations(value, callback) {
  setTimeout(() => {
    callback(value);
  }, 2000);
}

simulateAsyncOperations("Hej", (value) => {
  console.log("*Efter två sekunders fördröjning*: " + value);
});
