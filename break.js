function maxMessagesWithinBudget(budget) {
  // ?
  let totalCost = 0;
  let count = 0;

  while (true) {
    const messageCost = 1.0 + count * 0.01;

    if (totalCost + messageCost > budget) {
      break;
    }

    totalCost += messageCost;
    count++;
  }
  return count;
}

export { maxMessagesWithinBudget };