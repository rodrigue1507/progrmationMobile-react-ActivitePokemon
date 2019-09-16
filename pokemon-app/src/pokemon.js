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
class Pokemon extends React.Component{
    render(){
        const {pokemon,id} = this.props;
        return <div className="pokemon--species">
                <div className="poke-cell">
                  <div className="">
                    <img src={`/src/assets/Pokemon_XY_Sprites/${id}.png`} alt='image'/>
                  </div>
                  <div className=""> {pokemon.name} </div>
                </div>
              </div>;
        }
}

export default Pokemon;