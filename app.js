// =========================================
// app.js
// Main Application
// =========================================

import {
    getFoods,
    searchFoods,
    filterFoods
} from "./api.js";

import {
    getCart,
    addToCart,
    removeFromCart
} from "./storage.js";

import {
    renderFoods,
    renderCart,
    showLoader,
    hideLoader
} from "./ui.js";

// =========================
// Load Food Data
// =========================

async function loadFoods() {

    showLoader();

    const foods = await getFoods();

    renderFoods(foods);

    hideLoader();

}

loadFoods();

// =========================
// Search Food
// =========================

document
.getElementById("searchFood")
.addEventListener("keyup", async (e)=>{

    const foods = await searchFoods(e.target.value);

    renderFoods(foods);

});

// =========================
// Filter Category
// =========================

document
.getElementById("category")
.addEventListener("change", async (e)=>{

    const foods = await filterFoods(e.target.value);

    renderFoods(foods);

});

// =========================
// Event Delegation
// =========================

document.addEventListener("click",(e)=>{

    // Add To Cart

    if(e.target.classList.contains("addCartBtn")){

        const id = Number(e.target.dataset.id);

        getFoods().then(foods=>{

            const food = foods.find(item=>item.id===id);

            food.price = food.caloriesPerServing;

            addToCart(food);

            renderCart(getCart());

            alert("Item Added Successfully!");

        });

    }

    // Remove From Cart

    if(e.target.classList.contains("removeBtn")){

        const id = Number(e.target.dataset.id);

        removeFromCart(id);

        renderCart(getCart());

    }

});

// =========================
// Checkout
// =========================

document
.getElementById("checkoutBtn")
.addEventListener("click",()=>{

    if(getCart().length===0){

        alert("Your cart is empty!");

        return;

    }

    alert("Order Placed Successfully!");

    localStorage.removeItem("restaurant_cart");

    renderCart([]);

});

// =========================
// Initial Cart
// =========================

renderCart(getCart());