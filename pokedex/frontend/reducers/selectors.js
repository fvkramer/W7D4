const selectAllPokemon = (state) => {
  const { pokemon } = state.entities;
  return Object.values(pokemon);
};

export default selectAllPokemon;
