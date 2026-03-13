function fixUserMap(brokenMap) {
  // It teaches how to use map and keys to the code 
  // and need more work to understand it more
  const fixedMap = new Map();
  
  for (const [key, value] of brokenMap) {
    const fname = key.fname;
    const lname = key.lname;
    const fullName = `${fname} ${lname}`;
    
    fixedMap.set(fullName, value);    
  }
  return fixedMap;
}

export { fixUserMap };
