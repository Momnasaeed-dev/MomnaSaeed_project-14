// ======================================
// ui.js
// UI Rendering Module
// ======================================

/* ==========================
   Render Food Cards
========================== */

export function renderFoods(foods) {

    const foodContainer = document.getElementById("foodContainer");

    foodContainer.innerHTML = "";

    if (foods.length === 0) {

        foodContainer.innerHTML = `
            <h2 style="text-align:center;">
                No Food Items Found
            </h2>
        `;

        return;
    }

    foods.forEach(food => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <img src="${food.image}" alt="${food.name}">

            <div class="card-content">

                <h3>${food.name}</h3>

                <p><strong>Cuisine:</strong> ${food.cuisine}</p>

                <p><strong>Category:</strong> ${food.mealType ? food.mealType[0] : "Food"}</p>

                <p class="price">$${food.caloriesPerServing}</p>

                <button
                    class="addCartBtn"
                    data-id="${food.id}">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add To Cart
                </button>

            </div>

        `;

        foodContainer.appendChild(card);

    });

}

/* ==========================
   Render Shopping Cart
========================== */

export function renderCart(cart) {

    const cartItems = document.getElementById("cartItems");

    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        totalPrice.textContent = "$0";

        return;
    }

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <h4>${item.name}</h4>

            <p>

                Price : $${item.price}

            </p>

            <p>

                Quantity : ${item.quantity}

            </p>

            <button
                class="removeBtn"
                data-id="${item.id}">
                Remove
            </button>

        `;

        cartItems.appendChild(div);

    });

    totalPrice.textContent = "$" + total;

}

/* ==========================
   Loading Spinner
========================== */

export function showLoader() {

    document
        .getElementById("loader")
        .classList
        .remove("hidden");

}

export function hideLoader() {

    document
        .getElementById("loader")
        .classList
        .add("hidden");

}