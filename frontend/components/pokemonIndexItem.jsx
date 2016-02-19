var React = require('react');
var Link = require('react-router').Link;

var PokemonsIndexItem = React.createClass({
  render: function () {
    return (
      <div>
        <ul>
          <li className="poke-list-item">
            <Link to={"/pokemons/" + this.props.id}>{this.props.name + ": " + this.props.poke_type}</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = PokemonsIndexItem;
