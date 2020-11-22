const container = document.querySelector(".pokemons-container");

fetch("https://run.mocky.io/v3/5540a4df-7ca9-4b8f-9627-8ed86aed98bb")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let pokemons = data["details"];
    for (let i = 0; i < pokemons.length; i++) {
      let pokemonDiv = document.createElement("div");
      pokemonDiv.className = "pokemon";
      // <div class="pokemon"> </div>
      let img = document.createElement("img");
      img.src = pokemons[i].sprite;
      // <img src="...">
      let button = document.createElement("input");
      button.type = "button";
      button.value = "Download";
      // button.addEventListener('click', function() {})
      button.onclick = () => {
        let a = document.createElement("a");
        a.href = pokemons[i]["sprite"];
        // <a href="link" download="filename"></a>
        a.download = `${pokemons[i].name}.png`;
        a.click();
        a.remove();
      };
      pokemonDiv.appendChild(img);
      pokemonDiv.appendChild(button);
      container.appendChild(pokemonDiv);
    }
  });
