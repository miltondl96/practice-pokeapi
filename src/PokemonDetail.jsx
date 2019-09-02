import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import Navbar from './Navbar'

class PokemonDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonDetail: {
        sprites: {

        }
      }
    }
  }

  componentDidMount(){
    axios.get(this.props.location.state.pokemon)
    .then(
      (result) => {
        console.log(result.data.sprites.back_default)
        this.setState({
          pokemonDetail: result.data
        })
      }
    )
  }
  
  render(){
    const { abilities, base_experience, forms, game_indices, height, held_items, location_area_encounters, moves, name, species, sprites, stats, types, weight } = this.state.pokemonDetail
    console.log(this.state.pokemonDetail.sprites)
    return(
      <>
        <Navbar />
        <div className="container">
          <button 
            type="button" 
            className="btn btn-info btn-lg mt-2"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
          <div className="media">
            <img src={sprites.front_default} className="align-self-start mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0">{name}</h5>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(PokemonDetail)