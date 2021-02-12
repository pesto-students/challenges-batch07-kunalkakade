import { isString } from 'util';

function rot13Decode(char) {
  const decodedChar = 'A'.charCodeAt(0) + ((char.charCodeAt(0)) % 26);
  return String.fromCharCode(decodedChar);
}

function rot13(str) {
  if (isString(str)) {
    const finalStr = [];
    for (const char of str) {
      if (char >= 'A' && char <= 'Z') {
        finalStr.push(rot13Decode(char));
      } else {
        finalStr.push(char);
      }
    }
    return finalStr.join('');
  }
  throw new Error('a string should be passed');
}

export { rot13 };
