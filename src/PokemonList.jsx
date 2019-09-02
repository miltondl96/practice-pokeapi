import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import Navbar from './Navbar'

class PokemonList extends React.Component {

  state = {
    pokemonList: []
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(
      (result) => {
        this.setState({
          pokemonList: result.data.results
        })
      }
    )
  }

  setRow = (pokemon, i) => {
    return(
      <tr key={i} onClick={() => this.props.history.push(`/pokemon/${pokemon.name}/detail`, {pokemon: pokemon.url})}>
        <th scope="row">{i+1}</th>
        <td>{pokemon.name}</td>
        <td>{pokemon.url}</td>
      </tr>
    )
  }
  
  render(){
    const { pokemonList } = this.state
    return(
      <>
        <Navbar />
        <div className="container">
          <h1 className="text-center mt-3 text-info">Pokemon List</h1>
          <table className="table table-hover table-dark mb-5 mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              {
                pokemonList.map((pokemon, i) => (
                  this.setRow(pokemon, i)
                ))
              }
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default withRouter(PokemonList)