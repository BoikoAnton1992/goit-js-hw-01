function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

function calculateFuelCost(liters, pricePerLiter) {
  const totalCost = liters * pricePerLiter;
  return `The total cost for ${liters} liters is ${totalCost} credits!`;
}

console.log(calculateFuelCost(10, 1.5)); // "The total cost for 10 liters is 15 credits!"
console.log(calculateFuelCost(25, 2)); // "The total cost for 25 liters is 50 credits!"
console.log(calculateFuelCost(5, 3.75)); // "The total cost for 5 liters is 18.75 credits!"

function createDeliveryMessage(packageType, deliveryTime, cost) {
  return `Your ${packageType} will be delivered in ${deliveryTime} days at a cost of ${cost} credits.`;
}

console.log(createDeliveryMessage('document', 2, 30)); // "Your document will be delivered in 2 days at a cost of 30 credits."
console.log(createDeliveryMessage('parcel', 5, 50)); // "Your parcel will be delivered in 5 days at a cost of 50 credits."
console.log(createDeliveryMessage('fragile', 1, 100)); // "Your fragile will be delivered in 1 days at a cost of 100 credits."

function calculateRectangleArea(length, width) {
  const RectangleArea = parseFloat(length) * parseFloat(width);
  return RectangleArea;
}

console.log(calculateRectangleArea('10cm', '5cm')); // 50
console.log(calculateRectangleArea('15cm', '10cm')); // 150
console.log(calculateRectangleArea('7.5cm', '3.2cm')); // 24
