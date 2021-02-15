function curry(func) {
  return function internalFunction(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function (...args2) {
      return internalFunction(...args.concat(args2));
    };
  };
}

export {
  curry,
};
