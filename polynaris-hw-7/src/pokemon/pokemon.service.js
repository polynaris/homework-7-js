export default class PokemonService {
    constructor() {
        this.pageNumber = 0;
    }

    getAllAsync() {
        return fetch('/pokemons')
    }

    getByIdAsync(id) {
        return fetch(`/pokemons?id=${id}`)
    }

    getPageAsync() {
        this.pageNumber++;
        return fetch(`/pokemons?_page=${this.pageNumber}`);
    }
}