import { recipes } from "./recipes.mjs";

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}

function tagsTemplate(tags) {
  let html = "";
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  return html;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
      <img src="${recipe.image}" alt="image of ${recipe.name}" />
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">${recipe.description}</p>
      </figcaption>
    </figure>
  `;
}

function renderRecipes(recipeList) {
  const container = document.getElementById("recipes-container");
  container.innerHTML = recipeList.map(recipeTemplate).join("");
}

function filterRecipes(query) {
  const q = query.toLowerCase();
  const filtered = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(q);
    const descriptionMatch = recipe.description.toLowerCase().includes(q);
    const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(q));
    const ingredientMatch = recipe.recipeIngredient.some(item =>
      item.toLowerCase().includes(q)
    );
    return nameMatch || descriptionMatch || tagMatch || ingredientMatch;
  });
  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const query = document.getElementById("searchInput").value.toLowerCase();
  const results = filterRecipes(query);
  renderRecipes(results);
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
  const searchForm = document.getElementById("search");
  searchForm.addEventListener("submit", searchHandler);
}

init();