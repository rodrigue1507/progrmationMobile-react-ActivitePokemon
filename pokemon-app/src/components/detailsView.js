import React from 'react';
import SelectedPokeInfo from './selectedPokeInfo';
import '../components/styles/detailsView.css';

const DetailView = () => {
    return(
        <section className = "detail-view">
            <img src={`/src/assets/Pokemon_XY_Sprites/${SelectedPokeInfo.id}.png`} className='sprite-image' alt="sprite"/>
            <div className ='data-wrapper'>
                    <h1 className='data-name'>ID: {SelectedPokeInfo.id} {SelectedPokeInfo.name}</h1>
                    <p className ='data-char'>Type:</p>
            </div>
        </section>
    )
}
export default DetailView;

