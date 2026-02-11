class Message {
  static TOTAL_MESSAGES = 0;
  static TOTAL_MESSAGE_LENGTH = 0;
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    Message.TOTAL_MESSAGES++;
    Message.TOTAL_MESSAGE_LENGTH += body.length;
  }
  static getAverageMessageLength() {
    const average = Message.TOTAL_MESSAGE_LENGTH / Message.TOTAL_MESSAGES; 
    return Math.round(average * 100) / 100;
  }
}

// don't touch below this line
export { Message };