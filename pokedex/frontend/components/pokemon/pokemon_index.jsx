import React from 'react';


class PokemonIndex extends React.Component {
  componentDidMount() {
    const { requestAllPokemon } = this.props;
    requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    return (
      <ul>
        {pokemon.map(poke => <li key={poke.id}>{poke.name}</li>)}
      </ul>
    );
  }
}

export default PokemonIndex;
