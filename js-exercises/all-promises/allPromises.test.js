import { allPromises } from './allPromises';

describe('allPromises', () => {
  test('The function should return a Promise', () => {
    expect(allPromises() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise(res => res(1));
    const p2 = 2;
    const p3 = Promise.resolve(3);
    return expect(allPromises([p1, p2, p3])).resolves.toEqual([1, 2, 3]);
  });

  test('Promise call should return an array of values from promises after 1 sec', () => {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    // eslint-disable-next-line no-unused-vars
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 0, 'foo');
      // resolve("foo");
    });
    return expect(allPromises([promise1, promise2, promise3])).resolves.toEqual([3, 42, 'foo']);
  });
});
