export const selectAllPokemon = (state) => {
  const { pokemon } = state.entities;
  return Object.values(pokemon);
};

// export const selectPokemon = (state, pokemonId) => {
//   const { pokemon } = state.entities;
//   return Object.values(pokemon).filter(id => id === pokemonId);
// };
