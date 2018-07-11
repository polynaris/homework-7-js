import React, { Component } from 'react';
import PokemonService from './pokemon.service';

export default class PokemonTable extends Component {
    constructor(props) {
        super(props);
        this.pokemonService = new PokemonService();
        this.state = {
            pokemons: []
        };
    }

    componentDidMount() {
        this.getPage();
    }

    getPage() {
        this.pokemonService.getPageAsync()
            .then(response => response.json())
            .then(pokemons => this.setState(prevState => {
                return { pokemons: prevState.pokemons.concat(pokemons) };
            }));
    }

    render() {
        let pokemons = this.state.pokemons;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Pokedex</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pokemons.map(pokemon =>
                                <tr>
                                    <td>ID: {pokemon.id}</td>
                                    <td>Name: {pokemon.name}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button onClick={() => this.getPage()}>Load more</button>
            </div>
        );
    }
};