import React from 'react';
import SelectedPokeInfo from './selectedPokeInfo';
import '../components/styles/detailsView.css';

class DetailView extends React.Component{
    constructor(props){
        super(props)
        this.state={ id:0 , name:" "}
        this.getNewIdAndname = this.getNewIdAndname.bind(this)
    }

    getNewIdAndname(){
        this.setState(state => ({id: SelectedPokeInfo.id, name: SelectedPokeInfo.name}))
    }
    render(){
        return(
            <section className = "detail-view">
                <img src={`./assets/Pokemon_XY_Sprites/${this.id}.png`} className='sprite-image' alt="sprite" onClick={()=>this.getNewIdAndname()}/>
                <div className ='data-wrapper'>
                        <h1 className='data-name'>ID: {this.id} {this.name}</h1>
                        <p className ='data-char'>Type:</p>
                </div>
            </section>
        )
    }
}
export default DetailView;

