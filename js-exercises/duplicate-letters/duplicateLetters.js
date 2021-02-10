// Array based approach
// Time Complexity O(n) and space Complexity O(1)
function duplicateLetters(str) {
  let maxCnt = 1;
  const asciiOfA = 'a'.charCodeAt(0);
  // eslint-disable-next-line no-unused-vars
  const array = Array(26).fill(0);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    array[str.charCodeAt(i) - asciiOfA] = array[str.charCodeAt(i) - asciiOfA] + 1;
    if (array[str.charCodeAt(i) - asciiOfA] > maxCnt) {
      maxCnt = array[str.charCodeAt(i) - asciiOfA];
    }
  }
  if (maxCnt === 1) {
    return false;
  }
  return maxCnt;
}

export {
  duplicateLetters,
};
