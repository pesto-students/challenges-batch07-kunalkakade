function balancedBraces(str) {
  const stack = [];
  console.log(str);
  const bracketsMap = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (const i of str) {
    if (Object.values(bracketsMap).includes(i)) {
      stack.push(i);
    } else if (Object.keys(bracketsMap).includes(i)) {
      if (stack[stack.length - 1] === bracketsMap[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }

  return true;
}

export {
  balancedBraces,
};
