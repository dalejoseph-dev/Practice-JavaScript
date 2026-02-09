function createMessage(phoneNumber, message) {
  // ?
  const messageData = {
    phoneNumber,
    message,
    messageLength: message.length
  };

  return messageData;
}

export { createMessage };