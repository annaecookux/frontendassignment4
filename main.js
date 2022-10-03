//when user searches pokemon name, they receive pokemon data
document.querySelector('#search').addEventListener("click", getPokemon)


//displays the first letter of pokemons name in Uppercase
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//prevent errors from occurring when users enter uppercase, returns to lowercase
function lowerCaseName(string) {
  return string.toLowerCase();
}

//create function to pull api
function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  //pull the api with fetch, the ${name} variable allows the search to pull any name that is available
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    //get a response from json file
    .then((response) => response.json())
    //get our data
    .then((data) => {

      /* TO TEST THE JSON DATA
      //show the JSON data in the console log
      console.log(data);
      */

  //whatever is placed within `` in will display in the pokemonBox div
document.querySelector(".pokemonBox").innerHTML = `
<div>
<img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
    </div>
  </div>
  <div class="PokemonInfo">
  <h3>${capitalizeFirstLetter(data.name)}</h3>
  <p>Weight: ${data.weight}</p>
  <p>Height: ${data.height}</p>
  <p>Order: ${data.order}</p>
  </div>
`;
    })
    //use the catch to see if there is an error or not
    .catch((err) => {console.log("Pokemon not found", err)
  });

  e.preventDefault();
}