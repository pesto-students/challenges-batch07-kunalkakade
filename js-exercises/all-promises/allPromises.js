function allPromises(values = []) {
  // Base case.
  if (values.length === 0) {
    return Promise.resolve([]);
  }

  const [first, ...rest] = values;

  // Calling Promise.resolve on the first value because it could
  // be either a Promise or an actual value.
  return Promise.resolve(first).then(firstResult => {
    return allPromises(rest).then(restResults => {
      return [firstResult, ...restResults];
    });
  });
}
export { allPromises };
