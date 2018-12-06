import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = ({ name, url, keyTest }) => (
  <li>
    <Link to={`/pokemon/${keyTest}`}>
      {name}
      {url}
    </Link>
  </li>
);

export default PokemonIndexItem;
