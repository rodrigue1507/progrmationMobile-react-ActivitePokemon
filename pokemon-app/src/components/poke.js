import React from 'react';
import PokeList from './pokeList';
import './styles/poke.css';
import DetailView from './detailsView';
import Pokemon from '../pokemon';
class Poke extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(id){
    fetch('http://pokeapi.co/api/v2/pokemon/${id}/')
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);

      this.setState({ pokemon })
    })
    .catch(err => console.log(err))
    console.log(id);
  }

  render() {
    return (
      <div className="poke">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default Poke;