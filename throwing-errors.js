const sendMessage = (msg) => {
  // It teaches how to throw a new error using a conditional statements and return a message on an else statement.
  if (msg.length > 70) {
    throw new Error("Message is too long")
  } else {
    return msg;
  }
  
};

export { sendMessage };