function sumFibs(num) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(num)) {
    throw new Error('not a number');
  }

  let first = 1;
  let second = 1;
  let sum = 1;
  while (second <= num) {
    if (second % 2 === 1) {
      sum += second;
    }
    const temp = first;
    first = second;
    second = temp + second;
  }

  return sum;
}

function cacheFunction(cb) {
  const cache = {};

  return function (n) {
    if (!(n in cache)) {
      cache[n] = cb(n);
      return cache[n];
    }
    return cache[n];
  };
}

export { sumFibs, cacheFunction };
