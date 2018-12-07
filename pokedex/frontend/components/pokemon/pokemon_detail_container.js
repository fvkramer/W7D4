import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { fetchPokemon } from '../../actions/pokemon_actions';
// import { selectPokemon } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const pokemonId = ownProps.match.params.id;
  const pokemon = state.entities.pokemon[pokemonId];

  return {
    pokemon,
    pokemonId,
  };
};
// selector file


// receives id (not object)
const mapDispatchToProps = dispatch => ({
  // dispatches object
  fetchPokemon: pokemonId => dispatch(fetchPokemon(pokemonId)),
});

const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
export default PokemonDetailContainer;
