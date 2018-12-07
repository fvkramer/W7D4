export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon',
  })
);

// Refactor line 12
export const createPokemon = pokemon => (
  $.ajax({
    method: 'POST',
    url: 'api/pokemon',
    data: pokemon,
  })
);

// fetch one pokemon from DB to render on show page
export const fetchPokemon = pokemonId => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${pokemonId}`,
  })
);
