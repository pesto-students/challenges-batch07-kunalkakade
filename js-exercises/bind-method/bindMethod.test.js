// eslint-disable-next-line import/extensions
import { bind } from './bindMethod.js';

describe('bind method', () => {
  // Feel free to add more test cases
  test('should return a function', () => {
    const foo = function (x) {
      return x;
    };
    const obj = { a: 10 };
    expect(typeof bind(foo, obj)).toBe('function');
  });
  test('should hard bind a function to new context', () => {
    const foo = function (x) {
      return this.y + x;
    };
    const obj = { y: 10 };
    var y = 100;
    const bar = bind(foo, obj);
    expect(bar(10)).toBe(20);
  });

  test('test rest is used or not', () => {
    const foo = function (x, z) {
      return this.y + x + z;
    };
    const obj = { y: 10 };
    var y = 100;
    const bar = bind(foo, obj);
    expect(bar(10, 20)).toBe(40);
  });
});
