var PokemonActions = require('../actions/pokemonActions');

var fetchAllPokemons = {
  fetch: function() {
    $.ajax ({
      url: ("/api/pokemon"),
      type: "GET",
      success: (function(payload) {
        PokemonActions.receiveAllPokemons(payload);
      })
    });
  }
};

module.exports = fetchAllPokemons;
window.fetchAllPokemons = fetchAllPokemons;
