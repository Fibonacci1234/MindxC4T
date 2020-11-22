const container = document.querySelector('.pokemons-container')
const loginBanner = document.getElementsByClassName('login')[0]

let data = {
    "count": 12, "details": [{ "name": "bulbasaur", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { "name": "ivysaur", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { "name": "venusaur", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { "name": "charmander", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { "name": "charmeleon", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" }, { "name": "charizard", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" }, { "name": "squirtle", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" }, { "name": "wartortle", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" }, { "name": "blastoise", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" }, { "name": "caterpie", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" }, { "name": "metapod", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" }, { "name": "butterfree", "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" }]
}

let pokemons = data['details']
for (let i = 0; i < pokemons.length; i++) {
    let pokemonDiv = document.createElement('div')
    pokemonDiv.className = 'pokemon'
    // <div class="pokemon"> </div>
    let img = document.createElement('img')
    img.src = pokemons[i].sprite
    // <img src="...">
    let button = document.createElement('input')
    button.type = 'button'
    button.value = 'Download'
    // button.addEventListener('click', function() {})
    button.onclick = () => {
        let a = document.createElement('a')
        a.href = pokemons[i]['sprite']
        // <a href="link" download="filename"></a>
        a.download = `${pokemons[i].name}.png`
        a.click()
        a.remove()
    }
    pokemonDiv.appendChild(img)
    pokemonDiv.appendChild(button)
    container.appendChild(pokemonDiv)
}
