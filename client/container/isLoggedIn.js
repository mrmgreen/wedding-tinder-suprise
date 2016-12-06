class isLoggedIn {
  constructor() {
    this.loggedIn = false;
  }

  reset() {
    this.loggedIn = false;
  }

  login() {
    this.loggedIn = true;
  }

  get() {
    return this.loggedIn;
  }
}

const instance = new isLoggedIn();

export default instance;
