function debounce(fn, interval) {
  let timerId;
  function intenalFunc(args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(args), interval);
  }

  return intenalFunc;
}

export { debounce };
