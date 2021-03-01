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

function allSettled(promises = []) {
  const wrappedPromises = promises.map(p => Promise.resolve(p)
    .then(
      val => ({ status: 'fulfilled', value: val }),
      err => ({ status: 'rejected', reason: err })));
  return allPromises(wrappedPromises);
}

export { allSettled };
