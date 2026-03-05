const getMostRecentUser = (usernames) => {
  // ?
  if (usernames.length === 0) {
    return null;
  }
  return usernames[usernames.length - 1];
};

export { getMostRecentUser };