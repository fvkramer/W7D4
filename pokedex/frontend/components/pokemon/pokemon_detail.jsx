import React from 'react';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pokemon: {} };
    // debugger;
  }

  componentDidMount() {
    // debugger;
    const { fetchPokemon, pokemonId } = this.props;
    // fetchPokemon(pokemonId);

    const { pokemon } = this.props;

    this.setState({
      pokemon,
    });
  }

  // componentDidUpdate(prevProps) {
  //   const { fetchPokemon, pokemonId } = this.props;
  //   if (pokemonId !== prevProps.pokemonId) {
  //     return fetchPokemon(pokemonId);
  //   }
  //   return null;
  // }

  render() {
    // debugger;
    // const pokeList = this.props.state;
    const { pokemon } = this.props;

    if (pokemon === undefined) return null;

    return (
      <h1>
        Hello World
        {' '}
        {pokemon.name}
      </h1>
    );
  }
}

export default PokemonDetail;
