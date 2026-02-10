const campaign = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage() {
    return `${this.sentMessages++} ${this.maxMessages}`;
  },
};

// don't touch below this line

export { campaign };