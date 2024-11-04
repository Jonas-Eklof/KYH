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

// let frukter = ["äpple", "päron", "banan", "kiwi", "mango"];

// let lista = ["ett", 2, ["underlista"]];

// let animals = ["cat", "hamster", "parrot", "funky chihuahua"];

// console.log(animals.length);
// console.log(animals[0]);
// console.log(animals[3]);
// animals[1] = "tiger";
// console.log(animals);

// let a = [1, 2, 3, 7, 8, 9];
// let b = [4, 5, 6];

// a.splice(3, 0, ...b);
// console.log(a);

// let arr = ["a", "b", "c"];

// // let clone = arr.concat();
// // let clone = arr;
// let clone = Array.from(arr);
// console.log(clone);

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

// let i = 0;
// while (i < 1000) {
//   i++;
//   console.log(i);
// }

// let x = 1, y = 0;
// while (x <= 10) {
//   y = y + x;
//   x = x + 1;
// };
// console.log("y är: ", y);

// let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];

// for (let fruit of fruits) {
//   console.log(fruit);

// }

// ---------- Level up - Loops

// let suits = ['hjärter', 'spader', 'ruter', 'klöver'];
// let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// let deck = [];

// suits.forEach(suite => {
//   values.forEach(value => {
//     // deck.push(suite + ' ' + value)
//     deck.push(`${suite} ${value}`);
//   });
// });

// console.log(deck);

// let friends = [
//   {
//     name: "Sixten",
//     likes: ["bananas", "strawberries", "blueberries"],
//   },
//   {
//     name: "Khalid",
//     likes: ["papaya", "pear", "pineapple"],
//   },
//   {
//     name: "Lisa",
//     likes: ["raspberries", "watermelon", "apple"],
//   },
// ];

// friends.forEach((friend) => {
//   console.log(`${friend.name} gillar: `);
//   friend.likes.forEach((fruit) => {
//     console.log(fruit);
//   });
//   console.log("----");
// });

// let condition = true;

// if (condition) {
//   console.log("Sant");
// } else {
//   console.log("Falskt");
// }

// let length = 144
// if (length >= 130) {
//   console.log('Du får åka Balder!');
// }

// let month = {
//   1: "januari",
//   2: "februari",
//   3: "mars",
//   4: "april",
//   5: "maj",
//   6: "juni",
//   7: "juli",
//   8: "augusti",
//   9: "september",
//   10: "oktober",
//   11: "november",
//   12: "december",
// };

// let currentMonth = new Date().getMonth() + 1;

//   console.log(`Månaden är ${month[currentMonth]}`);

// let month = 10;

// if (month >= 9 && month <= 11) {
//   console.log("Årstiden är: höst");
// } else if (month >= 3 && month <= 5) {
//   console.log("Årstiden är: vår");
// } else if (month >= 6 && month <= 8) {
//   console.log("Årstiden är: sommar");
// } else if (month === 12 || month === 1 || month === 2) {
//   console.log("Årstiden är: vinter");
// } else {
//   console.log("Ogiltig månad");
// }

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 5));

const summa = (x, y) => {
  return x + y;
};

console.log(summa(5, 8));
