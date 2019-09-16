import React from 'react';
import '../components/styles/detailsView.css';

const DetailView = ({pokemon}) => {
     const{ id } = pokemon;
    return(
        <section className = "detail-view">

             <img src={`/src/assets/Pokemon_XY_Sprites/${id}.png`} className='sprite-image' alt="sprite"/>
            <div className ='data-wrapper'>
                <h1 className='data-name'>ID: {id} </h1>
                <p className ='data-char'>Type: </p>
            </div>
        </section>
    )
}
export default DetailView;


