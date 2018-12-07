import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
// export to reducer

// multiple pokemon
// pojo
export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon,
});

// action function
export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);


// single pokemon

// pojo
export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon,
});


// action function
// returns object
export const fetchPokemon = pokemonId => (dispatch) => {
  APIUtil.fetchPokemon(pokemonId)
    .then(
      poke => dispatch(receivePokemon(poke)),
    );
};
