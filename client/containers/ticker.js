class ticker{
  constructor() {
    this.ticker = 0;
  }

  increment() {
    this.ticker += 1;
  }

  decrement() {
    this.ticker -= 1;
  }

  get() {
    return this.ticker;
  }

  reset() {
    this.ticker = 0;
  }
}

const instance = new ticker();
Object.freeze(instance);

export default instance;
