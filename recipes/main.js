import { recipes } from "./recipes.mjs";

const container = document.getElementById("recipes-container");
const searchInput = document.getElementById("searchInput");

function displayRecipes(list) {
  container.innerHTML = "";
  list.forEach(recipe => {
    const filled = "⭐".repeat(recipe.rating);
    const empty = "☆".repeat(5 - recipe.rating);

    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <div class="recipe-layout">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div>
          <span class="tag">${recipe.tags[0]}</span>
          <h2 class="recipe-title">${recipe.name}</h2>
          <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
            <span aria-hidden="true">${filled}${empty}</span>
          </span>
          <p class="description">${recipe.description}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

displayRecipes(recipes);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(query)
  );
  displayRecipes(filtered);
});