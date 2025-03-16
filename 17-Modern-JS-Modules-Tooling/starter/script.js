// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing Module');

// addToCart('bread', '5');
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// Top level await (ES2022 +) -> NEEDS SCRIPT TO BE TYPE 'MODULE'
/*
// console.log('Start Fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
// Module Pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} ordered form supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

// CommonJS Modules

// Export
// export.addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };

*/

// Import
// const {addToCart} = require './shoppingCart.js'

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es/cloneDeep.js';
// import dayjs from 'dayjs';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
    { product: 'pasta', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// For polyfilling modern JS features
import 'core-js/stable';

// For polyfilling async functions
import 'regenerator-runtime/runtime';
