import React, { Component } from 'react';
import PokemonService from './pokemon.service';

export default class PokemonTable extends Component {
    constructor() {
        super();
        this.pokemonService = new PokemonService();
        this.pokemons = [];
    }
    componentDidMount() {
        this.pokemonService.getAllAsync()
            .then(response => {
                // this.pokemons.push(pokemons.json());
                return response.text();
            })
            .then(poke => console.log(poke));
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Pokedex</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.pokemons.map(pokemon => {
                            <tr>
                                <td>ID: {pokemon.id}</td>
                                <td>Name: {pokemon.name}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        );
    }
};