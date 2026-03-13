function createUserMap(users) {
  // It teaches how to use Map() keyword and learned how to use it properly.
  const userMap = new Map();
  for (const user of users) {
    const fullName = `${user.fname} ${user.lname}`;
    userMap.set(fullName, user);
  }
  return userMap;
}

export { createUserMap };