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

console.log(typeof (5 || 8));

let name = prompt("What is your name?");
console.log(name);
