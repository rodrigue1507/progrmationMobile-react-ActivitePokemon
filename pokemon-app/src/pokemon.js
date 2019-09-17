// class Pokemon{
//     constructor(data){
//         this.id = data.id;
//         this.name = data.name;
//         this.sprite = data.sprtites.sprtites.font_default;
//         this.type = data.types[0].type.name;
//     }
// }

// export default Pokemon;
import React from 'react';
import '../src/components/styles/pokecell.css';
import DetailView from './components/detailsView';

class Pokemon extends React.Component{
    render(){
        const {pokemon,id} = this.props;
        return <div className="pokemon--species">
                <div className="poke-cell" onClick={()=>this.GetItemTata(id,pokemon.name)}>
                  <div className="">
                    <img src={`../assets/Pokemon_XY_Sprites/${id}.png`}  alt='image'/>
                  </div>
                  <div className=""> {pokemon.name} </div>
                </div>
              </div>;
        }
      
        GetItemTata=(id,name)=>{
          console.log(name);
          return(
            <div>
              <DetailView id={id} name={name}/>   
            </div>
          ) 
        }
}

export default Pokemon;