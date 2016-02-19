var React = require('react'),
    ReactDOM = require('react-dom'),
    Dispatcher = require('./dispatcher/dispatcher'),
    FetchAllPokemons = require('./util/apiUtil'),
    PokemonActions = require('./actions/pokemonActions'),
    PokemonStore = require('./stores/pokemon'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    PokemonDetail = require('./components/pokemonDetail'),
    App = require('./components/app');

var routes = (
  <Route component={App} path="/">
    <Route component={PokemonDetail} path="pokemons/:pokemonId"></Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<Router>{routes}</Router>, root);
});
