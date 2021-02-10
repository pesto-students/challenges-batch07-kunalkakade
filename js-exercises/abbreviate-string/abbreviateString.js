import { isString } from 'util';

function abbreviateString(str) {
  if (isString(str)) {
    const strSplit = str.split(' ');
    let abbreviation = strSplit[0];
    if (strSplit.length > 1) {
      abbreviation = `${abbreviation} ${strSplit[strSplit.length - 1][0].toUpperCase()}.`;
    }
    return abbreviation;
  }
  // eslint-disable-next-line no-throw-literal
  throw 'not a string';
}

export { abbreviateString };
