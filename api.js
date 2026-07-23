// =======================================
// api.js
// Fetch API Module
// =======================================

const API_URL = "https://dummyjson.com/recipes";

// Get all food items
export async function getFoods() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch food data.");
        }

        const data = await response.json();

        return data.recipes;

    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}

// Search food
export async function searchFoods(keyword) {

    const foods = await getFoods();

    return foods.filter(food =>
        food.name.toLowerCase().includes(keyword.toLowerCase())
    );

}

// Filter by meal type
export async function filterFoods(category) {

    const foods = await getFoods();

    if (category === "all") {
        return foods;
    }

    return foods.filter(food =>
        food.mealType &&
        food.mealType.includes(category)
    );

}

// Get a single food item
export async function getFoodById(id) {

    try {

        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Food not found.");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

    }

}