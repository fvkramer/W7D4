import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    const { requestAllPokemon } = this.props;
    requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonList = pokemon.map(poke => (
      <PokemonIndexItem
        keyTest={poke.id}
        name={poke.name}
        url={poke.image_url}
      />
    ));

    return (
      <section className="pokedex">
        <ul>
          {pokemonList}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
