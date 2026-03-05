function getCleanRank(reviewWords) {
  // ?
  let badWordCount = 0;
  
  if (reviewWords.includes("dang")) {
    badWordCount++;
  }
  if (reviewWords.includes("shoot")) {
    badWordCount++;
  }
  if (reviewWords.includes("heck")) {
    badWordCount++;
  }
  
  if (badWordCount === 0) {
    return "clean";
  }
  if (badWordCount === 1) {
    return "dirty";
  }
  return "filthy";
}

export { getCleanRank };