import React from 'react';
import PokeList from './pokeList';
import './styles/poke.css';
import DetailView from './detailsView';

class PokeApp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedPokemon:null,
      species : [],
      fetched : false,
      loading : false,
    };

    this.selectPokemonHandler = this.selectPokemonHandler.bind(this)
  }

  selectPokemonHandler(pokemon){
    console.log(pokemon);l
  }


  componentWillMount(){
    this.setState({
      loading : true
    });
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res=>res.json())
    .then(response=>{
      this.setState({
        selectedPokemon:null,
        species : response.results,
        loading : true,
        fetched : true
      });
    });
  }

  render(){
    return <div className="poke">
      <PokeList species={this.state.species}/>
      <DetailView pokemon={this.state.selectedPokemon} />
    </div>;
  }
}
export default PokeApp;