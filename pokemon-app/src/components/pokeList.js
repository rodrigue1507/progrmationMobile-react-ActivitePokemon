import React from 'react';
import Pokemon from '../pokemon'
import PokeCell from './pokeCell';
import  PokeClasses  from '../components/pokeClasses';
import './styles/pokeList.css';

// const PokeList = ({ handleOnClick }) => {
//     const cells = Pokemon.map(Pokemon => {
//         return(
//             <PokeCell
//                 key={Pokemon.id}
//                 pokeClass={Pokemon}
//                 handleOnClick={handleOnClick}
//             />
//         )
//     }
//     )
//     return(
//         <section className="poke-list">
//                {cells}
//         </section>
//     )
// }
// export default PokeList;

class PokeList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        species : [],
        fetched : false,
        loading : false,
      };
    }
    componentWillMount(){
      this.setState({
        loading : true
      });
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res=>res.json())
      .then(response=>{
        this.setState({
          species : response.results,
          loading : true,
          fetched : true
        });
      });
    }
  
    render(){
      const {fetched, loading, species} = this.state;
      let content ;
      if(fetched){
        content = <div >{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
      }else if(loading && !fetched){
          content = <p> Loading ...</p>;
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