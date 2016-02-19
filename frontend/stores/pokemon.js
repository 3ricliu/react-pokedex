var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var _pokemons = {};
var PokemonStore = new Store(Dispatcher);




PokemonStore.all = function(){
  var result = [];
  Object.keys(_pokemons).forEach(function(index) {
    result.push(_pokemons[index]);
  });
  return result;
};

PokemonStore.__onDispatch = function(dispatcherData){
  switch(dispatcherData.actionType){
    case PokemonConstants.POKEMON_RECEIVED:
      resetPokemons(dispatcherData.property);
      PokemonStore.__emitChange();
      break;
  }
};

PokemonStore.find = function(id) {
  return _pokemons[id-1];
};

var resetPokemons = function (payload) {
  _pokemons = {};
  for(var i = 0; i < payload.length; i++){
    _pokemons[payload[i].id] = payload[i];
  }
};

module.exports = PokemonStore;
window.PokemonStore = PokemonStore;
