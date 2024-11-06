let flowers = [
  "Ros",
  "Tulpan",
  "Lilja",
  "Ros",
  "Tulpan",
  "Solros",
  "Solros",
  "Tulpan",
];

const counter = {};

flowers.forEach((flower) => {
  if (counter[flower]) {
    counter[flower]++;
  } else {
    counter[flower] = 1;
  }
});

console.log(counter);
