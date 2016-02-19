var React = require('react');
var PokemonStore = require('../stores/pokemon');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    this.pokemonId = this.props.params.pokemonId;
    this.pokemon = PokemonStore.find(parseInt(this.pokemonId));
    return { pokemon: this.pokemon };
  },

  render: function() {
    var toRender = "";
    var imgurl = "";
    debugger;
    if(this.pokemon === undefined){
      toRender = "No Pokemon";
    } else {
      toRender = this.pokemonId + ": " + this.pokemon.name + " " + this.pokemon.poke_type;
      imgurl = this.pokemon.image_url;
    }
    return(
      <div>
        <div className='pokemon-detail-pane'>
          <div className='detail'>
            {toRender}
            <img src={imgurl}></img>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PokemonDetail;
