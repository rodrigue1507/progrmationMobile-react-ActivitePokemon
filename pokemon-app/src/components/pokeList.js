import React from 'react';
import PokeCell from './pokeCell';
import  PokeClasses  from '../components/pokeClasses';
import './styles/pokeList.css';

const PokeList = () => {
    const cells = PokeClasses.map(pokeClass => {
        return(
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
            />
        )
    }
    )

    return(
        <section className="poke-list">
               {cells}
        </section>
    )
}
export default PokeList;