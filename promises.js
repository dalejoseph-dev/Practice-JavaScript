function updateMessageStatus(messageId, currentStatus, isDelivered) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // It teaches how to use promises and using resolve if it is we use if statement true
      // and if it is false we use rejected in our else statement whether its true or not
      // we use else if statement to input our condition if it's true or false.
      if (currentStatus === "Sending" && isDelivered === true) {
        resolve(`Textio Message ${messageId} has been delivered successfully.`);
      } else if (currentStatus === "Sending" && isDelivered === false) {
        reject(
          `Textio Message ${messageId} is still sending and cannot be marked as delivered.`,
        );
      } else {
        resolve(
          `Textio Message ${messageId} status updated to ${currentStatus}.`,
        );
      }
    }, 500);
  });
}

// don't touch below this line

export { updateMessageStatus };
