import "./styles/style.css";
import { fetchRecipes, insertRecipe } from "./supabase-data";

async function getRandomRecipe() {
  const recipes = await fetchRecipes();
  console.log(recipes);

  const randomIndex = Math.floor(Math.random() * recipes.length);
  console.log(recipes[randomIndex]);
}

function renderRandomRecipe() {
  const randomRecipeBtn = document.querySelector("[data-random-recipe-btn]");
  randomRecipeBtn.addEventListener("click", getRandomRecipe);
}

renderRandomRecipe();
