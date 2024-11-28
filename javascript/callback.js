// Uppgift 1

// function doAfterDelay(callback, delay) {
//   setTimeout(callback, delay);
// }

// function conlog() {
//   console.log("Detta ska kallas efter en delay");
// }

// doAfterDelay(conlog, 3000);

// Uppgift 2

// const lista = [1, 2, 3, 4, 5, 6, 7, 8];

// function listarSiffror(callback) {
//   console.log(callback);
// }

// lista.forEach(listarSiffror);

// Uppgift 3
// const lista2 = ["ett", "två", "tre", "fyra"];

// function processElements(arr, callback) {
//   arr.forEach(callback);
// }

// function uppercase(element, array) {
//   console.log((array = element.toUpperCase()));
// }

// processElements(lista2, uppercase);

// Uppgift 4

// function simulateAsyncOperations(value, callback) {
//   setTimeout(() => {
//     callback(value);
//   }, 2000);
// }

// simulateAsyncOperations("Hej", (value) => {
//   console.log("*Efter två sekunders fördröjning*: " + value);
// });

// Uppgift 5

// Filter

const siffror = [42, 15, 67, 89, 23, 5, 78, 34, 11, 92];

const filtrerat = siffror.filter(filtrera);

function filtrera(siffra) {
  return siffra > 60;
}

console.log(filtrerat);

// Callback

function processText(text, callback) {
  console.log(callback(text));
}

function countLetters(str) {
  return str.length;
}

function upperCase(str) {
  return str.toUpperCase();
}

processText("haaaaaaaaaaaaalleluja", countLetters);
processText("haaaaaaaaaaaaalleluja", upperCase);

// Promise

const fetchData = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data hämtades framgångsrikt!");
    } else {
      reject("Det gick inte att hämta datan.");
    }
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
