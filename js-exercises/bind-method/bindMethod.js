// You can change the `args`
function bind(fn, obj) {
  return function (...args) {
    return fn.call(obj, ...args);
  };
}

module.exports = { bind };
