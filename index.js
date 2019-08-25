var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var priceGenerator = Math.random() * (100 - 1) + 1;
var priceAsInteger = Math.floor(priceGenerator);
 var wholeItem = {itemName: item,  itemPrice: priceAsInteger};
 cart.push(wholeItem);
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
 var itemView = []; // Why am i creating an empty array?
  for (var i = 0; i < cart.length; i++ ) {
    if (cart.length === 0) {
      return ("Your shopping cart is empty.")
    } else {
      itemView.push (`${itemName} at $${itemPrice}`)
      return ("In your cart, you have " + itemView);
    }
  }
}

function total() {
  // write your code here
var sum = 0;
// Why does it have to be outside the loop
  for (var i = 0; i < cart.length; i++) {
    sum += cart.reduce();
    // total = total + the next index in the cart as it loops
  }
    return sum;
}

function removeFromCart(item) {
  // write your code here
  for (i = 0; i < cart.length; i++) {
    if (item === cart[i]) {
      var removeItem = cart.splice(item, 1);
      return removeItem;
  } else {
      return ("That item is not in your cart.")
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if  (cardNumber === true) {
    return ("Your total cost is " + total() + `, which will be charged to the card ${cardNumber}.`);
  } else {
      return ("Sorry, we don't have a credit card on file for you.");
  }
}
