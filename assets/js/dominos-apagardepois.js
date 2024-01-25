const foodApi = {}

foodApi.getPokemosDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

foodApi.getFood = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((foodApi.getPokemosDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => {
            console.log(pokemonDetails)
        })
    }

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => {
    console.log(results)
})