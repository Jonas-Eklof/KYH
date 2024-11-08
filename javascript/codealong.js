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

console.table(counter);

function add(x, y) {
  return x + y;
}

console.log(add(5, 10));

const adding = (x, y) => {
  return x + y;
};

console.log(adding(5, 10));
