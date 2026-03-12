function deduplicateEmails(emails) {
  // It teaches how to create new set and return the newly created set.
  const uniqueSet = new Set(emails);
  const uniqueArray = [...uniqueSet];
  
  return uniqueArray;
}

// don't touch below this line

export { deduplicateEmails };