import React from 'react';
import '../components/styles/detailsView.css';
class SelectedPokeInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {id: 0, name:""}
    }

    render(){
        return(
            <div>
                <p>{this.state.id}</p>
                <p>{this.state.name}</p>
            </div>
        )
    }
} 
export default SelectedPokeInfo;