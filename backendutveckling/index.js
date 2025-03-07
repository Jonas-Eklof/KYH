const fs = require("fs");
const readline = require("readline-sync");

const filename = readline.question("Vad heter din fil?\n");
console.log(`Din fil heter: ${filename}`);

const newQuote = "Fuck off!";

fs.writeFile(filename + ".txt", newQuote, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("You have successfully fucked off.");
  }
});

fs.readFile(filename + ".txt", "utf8", (error, content) => {
  if (content) {
    console.log(content);
  } else {
    console.log(error);
  }
});
