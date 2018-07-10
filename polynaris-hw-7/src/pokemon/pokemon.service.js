export default class PokemonService {
    getAllAsync() {
        return fetch({
            url: '/pokemons',
            method: 'GET',
        })
    }

    getByIdAsync(id) {

    }

    getPageAsync(size, pageNumber) {

    }
}