import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => 
  // debugger;
   ({ pokemon: selectAllPokemon(state)  })
;

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
});

const PokemonIndexContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
export default PokemonIndexContainer;
