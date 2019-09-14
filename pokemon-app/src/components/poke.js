import React from 'react';
import PokeList from './pokeList';
import './styles/poke.css';


class Poke extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="poke">
        <PokeList />
      </div>
    );
  }
}


export default Poke;