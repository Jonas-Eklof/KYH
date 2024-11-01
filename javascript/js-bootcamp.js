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

let num1 = Number(prompt("Ange det första talet:"));
let num2 = Number(prompt("Ange det andra talet:"));

let summa = num1 + num2;
let differens = num1 - num2;
let produkt = num1 * num2;

console.log("Summa:", summa);
console.log("Differens:", differens);
console.log("Produkt:", produkt);

let number = Number(prompt("Ange ett tal:"));

let roundedInteger = Math.round(number);
console.log("Avrundat till heltal: " + roundedInteger);

let roundedDecimal = number.toFixed(1);
console.log("Avrundat till en decimal: " + roundedDecimal);
