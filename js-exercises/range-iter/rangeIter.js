// eslint-disable-next-line consistent-return
function rangeIter(lb, ub) {
  // eslint-disable-next-line prefer-rest-params
  if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    if (ub > lb) {
      const arr = [];
      // eslint-disable-next-line no-plusplus
      for (let i = lb; i <= ub; i++) {
        arr.push(i);
      }
      return arr;
    }
    if (lb > ub) {
      const arr = [];
      return arr;
    }
    if (lb === ub) {
      const arr = [lb];
      return arr;
    }
  } else {
    // eslint-disable-next-line no-throw-literal
    throw 'not correct args';
  }
}

export { rangeIter };
