var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');


var pokemonActions = {
  receiveAllPokemons: function(payload){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      property: payload
    });
  }
};

module.exports = pokemonActions;
window.pokemonActions = pokemonActions;
