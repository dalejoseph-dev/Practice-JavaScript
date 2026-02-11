class Contact {
  constructor(name, phoneNumber) {
    this.name = name;
    this._phoneNumber = phoneNumber;
  }

  // ?
  set phoneNumber(value) {
    if (value.length !== 10) {
      throw new Error("Invalid phone number.");
    }
    this._phoneNumber = value;
}
    get phoneNumber() {
      return `(${this._phoneNumber.slice(0, 3)}) ${this._phoneNumber.slice(3, 6)}-${this._phoneNumber.slice(6)}`;
    }
}

// don't touch below this line

export { Contact };