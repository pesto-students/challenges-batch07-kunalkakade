const limitFunctionCallCount = (func, limit = 0) => function (...args) {
  if (limit > 0) {
    // eslint-disable-next-line no-param-reassign
    limit--;
    return func(...args);
  }
  return null;
};

export {
  limitFunctionCallCount,
};
