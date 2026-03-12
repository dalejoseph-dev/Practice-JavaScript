function getPrimaryAndBackupMessages(messages) {
  // It teaches how to use destructure array.
  const [primary, ...backups] = messages;
  
  return {primary, backups};
}

export { getPrimaryAndBackupMessages };
