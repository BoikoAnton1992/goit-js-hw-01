function getShippingMessage(country, price, deliveryFee) {
    totalPrice = price + deliveryFee
    return `Shipping to ${country} will cost ${totalPrice} credits`
}