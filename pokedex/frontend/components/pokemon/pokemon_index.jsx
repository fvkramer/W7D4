import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  componentDidMount() {
    const { requestAllPokemon } = this.props;
    requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;

    const pokemonList = pokemon.map(poke => (
      <PokemonIndexItem
        key={poke.id}
        name={poke.name}
        url={poke.image_url}
        id={poke.id}
      />
    ));

    return (
      <section className="pokedex">
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />

        <ul>
          {pokemonList}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
