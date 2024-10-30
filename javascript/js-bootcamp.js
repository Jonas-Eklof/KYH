let a = 1;
let b = "1";
if (a == b) {
  console.log(true);
} else {
  console.log(false);
}

let greeting = "Goodbye world!";
{
  greeting = "Hello World";
}
console.log(greeting);

let namn = prompt("Vad heter du?");
console.log(`Välkommen ${namn}!`);

let num1 = parseFloat(prompt("Ange det första talet:"));
let num2 = parseFloat(prompt("Ange det andra talet:"));

let summa = num1 + num2;
let differens = num1 - num2;
let produkt = num1 * num2;

console.log("Summa:", summa);
console.log("Differens:", differens);
console.log("Produkt:", produkt);
