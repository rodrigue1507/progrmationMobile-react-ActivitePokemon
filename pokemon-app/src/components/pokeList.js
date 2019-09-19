import React from 'react';
import Pokemon from '../pokemon'
//import DetailView from './detailsView'
//import PokeCell from './pokeCell';
//import  PokeClasses  from '../components/pokeClasses';
import './styles/pokeList.css';
import SelectedPokeInfo from './selectedPokeInfo';

class PokeList extends React.Component{
    constructor(props){
      super(props);
    }
    
    
    render(){
      let content ;
      if(this.props.species!=null && this.props.species.length>0){
        content = <div>{
          this.props.species.map(
                        (pokemon,index)=><div>
                              <Pokemon 
                                key={pokemon.name} 
                                id={index+1} 
                                pokemon={pokemon} /></div>)}
        </div>;
      }
      else{
        content = <div/>;
      }
      return  <div className="poke-list">
        {content}
      </div>;
    }
  }
  export default PokeList;