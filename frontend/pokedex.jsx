var React = require('react'),
    ReactDOM = require('react-dom'),
    Dispatcher = require('./dispatcher/dispatcher'),
    FetchAllPokemons = require('./util/apiUtil'),
    PokemonActions = require('./actions/pokemonActions'),
    PokemonStore = require('./stores/pokemon'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');

var Pokedex = React.createClass({
  render: function() {
    return(
      <div>Hello</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<PokemonsIndex />, root);
});
