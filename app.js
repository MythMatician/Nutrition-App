const input = document.querySelector('input');
const button = document.querySelector('button');
const recipes = document.querySelector('.recipes');

const apiURL = `https://edamam-recipe-search.p.rapidapi.com/search?q=`;

const options = {
    "headers": {
		"x-rapidapi-key": "63495e7466msh9d628fbd56b1a3ep10032cjsn4cf3ec066dc7",
		"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
    }
}

const fetchData = async (val) => {
    const res = await fetch(`${apiURL}${val}`, options);
    const data = await res.json();
    const arr = data.hits;
    arr.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>${item.recipe.label}</h4>
        <img src="${item.recipe.image}">
        <p>Calories ${item.recipe.calories}</p>
        <a href="${item.recipe.url}" target="_blank">Link to Recipe</p>
        <p>${item.recipe.source}</p>
        `;
        div.classList.add('recipe');
        recipes.append(div);
        // console.log(item.recipe);
    })
}

input.addEventListener('change', () => {
    recipes.innerHTML = '';
})

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(input.value);
})





