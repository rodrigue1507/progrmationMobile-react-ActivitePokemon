import React from 'react';
import ReactDOM from 'react-dom';
import 'pokedex-promise-v2';
var Pokedex = require('pokedex-promise-v2');

class PokemeonDate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            interval:{
                limit: 10,
                offset: 34
            },
            p : new Pokedex()
        };
      }

    getPokemonList(){
          p.getPokemonsList(interval)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                    isLoaded: true,
                    items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                      });
                }
            )
            
    }
    
    render(){
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          }else if (!isLoaded) {
            return <div>Loading...</div>;
          }else {
            return (
              <ul>
                {items.map(items => (
                  <li key={items.results.name}>
                    {items.results.name} {items.results.url}
                  </li>
                ))}
              </ul>
            );
          }
    }


}

export default PokemeonDate