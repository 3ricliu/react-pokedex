var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    FetchAllPokemons = require('../../util/apiUtil');

var pokemonList = function(pokemons) {
  var array = [];
  for (var i=0; i<pokemons.length; i++) {
    array.push(<li key={i}>{pokemons[i].name}</li>);
  }
  return array;
};

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
        <ul>
          {pokemonList(this.state.pokemons)}
        </ul>
      </div>
    );
  }
});

module.exports = PokemonsIndex;
