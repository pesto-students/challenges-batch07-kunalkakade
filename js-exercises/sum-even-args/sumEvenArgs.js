const sumEvenArgs = (...args) => {
  const sum = args.filter((number) => number % 2 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

export { sumEvenArgs };
