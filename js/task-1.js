function makeTransaction(quantity, pricePerDroid) {
    totalPrice = quantity * pricePerDroid;
   return `You ordered ${quantity} droids worth ${pricePerDroid} credits!`
}