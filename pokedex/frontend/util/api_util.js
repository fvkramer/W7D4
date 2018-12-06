export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemon',
  })
);

// Refactor line 12
export const createPokemon = pokemon => (
  $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: {
      pokemon,
    },
  })
);
