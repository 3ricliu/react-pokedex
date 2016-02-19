var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    FetchAllPokemons = require('../../util/apiUtil'),
    PokemonIndexItem = require('../pokemonIndexItem');


var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return ({pokemons: []});
  },

  componentDidMount: function(){
    this.listenerToken = PokemonStore.addListener(this._onChange);
    FetchAllPokemons.fetch();
  },

  _onChange: function(){
    this.setState({pokemons: PokemonStore.all()});
  },

  componentWillUnmount: function(){
    this.setState({pokemons: []});
    this.listenerToken.remove();
  },

  render: function() {
    return(
      <div>
        {this.state.pokemons.map(function (pokemon) {
          return <PokemonIndexItem key={pokemon.name} {...pokemon} />;
        })}
      </div>
    );
  }
});

module.exports = PokemonsIndex;
