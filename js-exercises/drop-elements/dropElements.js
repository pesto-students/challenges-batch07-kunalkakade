function dropElements(elements, predicate) {
  return elements.filter(i => predicate(i));
}

export { dropElements };
