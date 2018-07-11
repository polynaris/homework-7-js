import React from "react";
import ReactDOM from "react-dom";
import PokemonTable from './pokemon/pokemon-table.component.jsx'
import PokemonService from './pokemon/pokemon.service'

const pokemonService = new PokemonService();

ReactDOM.render(
  <PokemonTable />,
  document.getElementById('app')
);