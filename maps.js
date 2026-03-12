function addToPhonebook(phoneNumber, name, phoneBook) {
  // It teaches how to create a new map to map a new phonebook array.
  const newPhoneBook = new Map(phoneBook);
  newPhoneBook.set(phoneNumber, name);
  
  return newPhoneBook;
}

// don't touch below this line

export { addToPhonebook };