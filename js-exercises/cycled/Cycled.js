class Cycled {
  constructor(array) {
    this.array = [...array];
    this.currentIndex = 0;
    this.lengthOfArray = this.array.length;
    Object.defineProperty(this, 'index', {
      get() {
        return this.currentIndex;
      },
      set(value) {
        if (value >= 0) {
          this.currentIndex = value % this.lengthOfArray;
        }
      },
    });
  }

  [Symbol.iterator](reversed = false) {
    let index = -1;
    const data = [...this.array];
    if (reversed) {
      data.reverse();
    }
    return {
      next: () => {
        index += 1;
        const returnObj = {
          value: data[index % this.lengthOfArray],
          done: index >= this.lengthOfArray,
        };
        // this.currentIndex = index + 1;
        return returnObj;
      },
    };
  }

  next() {
    // [1, 2, 3]
    const firstElement = this.array[0];
    // this.array = [2, 3, 1];
    this.array = this.array.slice(1, this.lengthOfArray);
    this.array.push(firstElement);
    return this.current();
  }

  previous() {
    const lastElement = this.array.pop();
    this.array = [lastElement, ...this.array];
    return this.current();
  }

  current() {
    return this.array[this.currentIndex];
  }

  step(value) {
    let i = value % this.lengthOfArray;
    if (i < 0) {
      while (i < 0) {
        const lastElement = this.array.pop();
        this.array = [lastElement, ...this.array];
        i += 1;
      }
    } else {
      while (i > 0) {
        const firstElement = this.array[0];
        this.array = this.array.slice(1, this.lengthOfArray);
        this.array.push(firstElement);
        i -= 1;
      }
    }
    // console.log(this.current());
    return this.current();
  }

  indexOf(value) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.lengthOfArray; i++) {
      if (value === this.array[i]) return i;
    }
    return -1;
  }

  reversed() {
    return this[Symbol.iterator](true);
  }
}

export { Cycled };
