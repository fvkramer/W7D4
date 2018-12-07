import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = ({ name, url, id }) => (
  <li>
    <img src={url} alt={name} />
    <Link to={`/pokemon/${id}`}>{name}</Link>
  </li>
);

export default PokemonIndexItem;
