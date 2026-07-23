// ======================================
// storage.js
// Local Storage Module
// ======================================

const CART_KEY = "restaurant_cart";

/* ==========================
   Get Cart Items
========================== */

export function getCart() {

    const cart = localStorage.getItem(CART_KEY);

    return cart ? JSON.parse(cart) : [];

}

/* ==========================
   Save Cart
========================== */

export function saveCart(cart) {

    localStorage.setItem(CART_KEY, JSON.stringify(cart));

}

/* ==========================
   Add Item to Cart
========================== */

export function addToCart(food) {

    const cart = getCart();

    const existingItem = cart.find(item => item.id === food.id);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            ...food,
            quantity: 1
        });

    }

    saveCart(cart);

}

/* ==========================
   Remove Item
========================== */

export function removeFromCart(id) {

    let cart = getCart();

    cart = cart.filter(item => item.id !== id);

    saveCart(cart);

}

/* ==========================
   Increase Quantity
========================== */

export function increaseQuantity(id) {

    const cart = getCart();

    cart.forEach(item => {

        if (item.id === id) {

            item.quantity++;

        }

    });

    saveCart(cart);

}

/* ==========================
   Decrease Quantity
========================== */

export function decreaseQuantity(id) {

    let cart = getCart();

    cart.forEach(item => {

        if (item.id === id && item.quantity > 1) {

            item.quantity--;

        }

    });

    saveCart(cart);

}

/* ==========================
   Calculate Total Price
========================== */

export function getTotalPrice() {

    const cart = getCart();

    return cart.reduce((total, item) => {

        return total + (item.price * item.quantity);

    }, 0);

}

/* ==========================
   Clear Cart
========================== */

export function clearCart() {

    localStorage.removeItem(CART_KEY);

}