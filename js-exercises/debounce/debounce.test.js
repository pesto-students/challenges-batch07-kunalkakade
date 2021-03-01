import { debounce } from './debounce';

describe('debounce', () => {
  jest.useFakeTimers();
  test('Function should execute only once', () => {
    const func = jest.fn();
    const debouncedFn = debounce(func, 1000);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      debouncedFn();
    }

    // jest.advanceTimersByTime(1000);
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});