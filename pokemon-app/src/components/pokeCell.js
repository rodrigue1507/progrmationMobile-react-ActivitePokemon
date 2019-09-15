import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/pokecell.css';


const Pokecell = ({ pokeClass, handleOnClick }) => {
    const{id,backgroundPosition} = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, 
    backgroundPosition };
    return <buttom onClick={() => handleOnClick(id)} style={style} 
    className="poke-cell"></buttom>
};

export default Pokecell;