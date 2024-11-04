// let a = 1;
// let b = "1";
// if (a == b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let greeting = "Goodbye world!";
// {
//   greeting = "Hello World";
// }
// console.log(greeting);

// let namn = prompt("Vad heter du?");
// console.log(`Välkommen ${namn}!`);

// let num1 = Number(prompt("Ange det första talet:"));
// let num2 = Number(prompt("Ange det andra talet:"));

// let summa = num1 + num2;
// let differens = num1 - num2;
// let produkt = num1 * num2;

// console.log("Summa:", summa);
// console.log("Differens:", differens);
// console.log("Produkt:", produkt);

// let number = Number(prompt("Ange ett tal:"));

// let roundedInteger = Math.round(number);
// console.log("Avrundat till heltal: " + roundedInteger);

// let roundedDecimal = number.toFixed(1);
// console.log("Avrundat till en decimal: " + roundedDecimal);

// ------------------ Arrays

let frukter = ["äpple", "päron", "banan", "kiwi", "mango"];

let lista = ["ett", 2, ["underlista"]];

let animals = ["cat", "hamster", "parrot", "funky chihuahua"];

console.log(animals.length);
console.log(animals[0]);
console.log(animals[3]);
animals[1] = "tiger";
console.log(animals);

let a = [1, 2, 3, 7, 8, 9];
let b = [4, 5, 6];

a.splice(3, 0, ...b);
console.log(a);

let arr = ["a", "b", "c"];

// let clone = arr.concat();
// let clone = arr;
let clone = Array.from(arr);
console.log(clone);

// ------------------------ Loops

// for (let i = 0; i < 1000; i++) {
//   console.log("Varv " + i);
// }

// for (i = 100; i > 0; i--) {
//   console.log('Du är på varv ' + i);
// };

// let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i] + ", " +i);
// };

// let things = ["hammer", "nails", "ruler", "screwdriver", "screws", "saw"];

// for (i = 0; i < things.length; i++) {
//   console.log(things[i]);

// };

// things.forEach(function(thing, index) {
//   console.log(thing + ' ' + index);
// });
