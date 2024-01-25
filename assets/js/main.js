const mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
const loadMoreButton = document.getElementById('loadMoreButton');
const mealList = document.getElementById('pokemonList');
let offset = 0;
const limit = 10;

function convertMealToHtml(meal) {
    return `<li>
        <strong>${meal.strMeal}</strong>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    </li>`;
}

function loadMoreMeals() {
    offset += limit;

    fetch(`${mealUrl}&offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;

            // Exibir dados de refeições canadenses
            meals.forEach(meal => {
                mealList.innerHTML += convertMealToHtml(meal);
            });
        })
        .catch(error => console.error(error));
}

// Buscar dados de refeições canadenses requisição HTTP
fetch(`${mealUrl}&offset=${offset}&limit=${limit}`)
    .then(response => response.json())
    .then(data => {
        const meals = data.meals.slice(0, 4);

        // Limpar o conteúdo existente em mealList
        mealList.innerHTML = '';

        // Exibir dados de refeições canadenses
        meals.forEach(meal => {
            mealList.innerHTML += convertMealToHtml(meal);
        });
    })
    .catch(error => console.error(error));

// Adicionar um ouvinte de eventos para o botão de "Carregar Mais"
loadMoreButton.addEventListener('click', loadMoreMeals);
