export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  if (a / b === 0) {
    return `Error: Division by 0 is not allowed`;
  }
  return a / b;
};
