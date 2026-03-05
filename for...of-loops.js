const getCleanMessages = (messages, badWord) => {
  // ?
  const cleanMessages = [];
  for (let message of messages) {
    if (!message.toLowerCase().includes(badWord.toLowerCase())) {
      cleanMessages.push(message);
    }
  }
    return cleanMessages;
};

export { getCleanMessages };