const textioSetupCompleteWait = 0;
const errorHandlingWait = 0;
const messageRoutingWait = 0;
const smsProvidersWait = 0;

// don't touch below this line

setTimeout(
  () => console.log("Textio setup complete!"),
  textioSetupCompleteWait,
);
setTimeout(
  () => console.log("Setting up error handling and retries..."),
  errorHandlingWait,
);
setTimeout(
  () => console.log("Configuring message routing..."),
  messageRoutingWait,
);
setTimeout(
  () => console.log("Connecting to SMS providers..."),
  smsProvidersWait,
);

console.log("Starting Textio service initialization...");

await sleep(2500);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}