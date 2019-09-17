import React from 'react';
import PokeList from './pokeList';
import './styles/poke.css';
import DetailView from './detailsView';

class PokeApp extends React.Component{
  render(){
    return <div className="poke">
      <PokeList/>
      <DetailView />
    </div>;
  }
}
export default PokeApp;