import { supabase } from "./supabase";

async function fetchRecipes() {
  try {
    let { data: recipes, error } = await supabase.from("recipes").select("*");
    return recipes;
  } catch (error) {
    console.error(error);
  }
}

async function insertRecipe(
  name,
  description,
  directions,
  list_of_ingredients,
  difficulty = null,
  last_cooked = null,
  vegetarian = null,
  not_liked_by = null,
  favored_by = null,
  estimated_time = null
) {
  try {
    const { data, error } = await supabase.from("recipes").insert({
      name,
      description,
      directions,
      list_of_ingredients,
    });
  } catch (error) {
    console.error(error);
  }
}

export { fetchRecipes, insertRecipe };
