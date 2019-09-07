import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Navbar from './Navbar'

class PokemonDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonDetail: {
        sprites: {},
        abilities: [],
        moves: [],
        stats: [],
        types: [],
      }
    }
  }

  componentDidMount() {
    axios.get(this.props.location.state.pokemon)
      .then(
        (result) => {
          this.setState({
            pokemonDetail: result.data
          })
        }
      )
  }

  render() {
    const { abilities, base_experience, height, moves, name, sprites, stats, types, weight } = this.state.pokemonDetail
    const { image } = this.props.location.state
    return (
      <>
        <Navbar />
        <div className="container ">
          <button
            type="button"
            className="btn btn-dark btn-lg mt-2"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
          <div className="d-flex justify-content-around">
            <div className="card w-75 text-white bg-dark mt-4">
              <div className="card-body">
                <h2 className="card-title text-capitalize text-center">{name}</h2>

                <div className="d-flex">
                  <div className="w-50 p-4">
                    <img src={image} alt="" className="img-fluid pb-4" />
                    <h5 className="">Abilities:</h5>

                    <ul>
                      {abilities.map((ability, i) => (
                        <li key={i} className="text-capitalize">{ability.ability.name}</li>
                      ))}
                    </ul>

                    <h5 className="">Base Experience:</h5>

                    <ul>
                      <li>{base_experience}</li>
                    </ul>

                    <h5 className="">Height:</h5>

                    <ul>
                      <li>{height}</li>
                    </ul>

                    <h5 className="">Weight:</h5>

                    <ul>
                      <li>{weight}</li>
                    </ul>
                    <h5 className="">Stats:</h5>
                    <ul>
                      {stats.map((stat, i) => (
                        <li key={i} className="text-capitalize">{stat.stat.name}: {stat.base_stat}</li>
                      ))}
                    </ul>
                    <h5 className="">Types:</h5>

                    <ul>
                      {types.map((type, i) => (
                        <li key={i} className="text-capitalize">{type.type.name}</li>
                      ))}
                    </ul>

                    <h5 className="">Sprites:</h5>

                    <ul>
                      <li>
                        <p>Default</p>
                        <img src={sprites.front_default} alt="" />
                        <img src={sprites.back_default} alt="" />
                      </li>
                      <li>
                        <p>Shiny</p>
                        <img src={sprites.front_shiny} alt="" />
                        <img src={sprites.back_shiny} alt="" />
                      </li>
                    </ul>

                  </div>

                  <div className="w-50 p-4">
                    

                    <h5 className="">Moves:</h5>

                    <ul>
                      {moves.map((move, i) => (
                        <li key={i} className="text-capitalize">{move.move.name}</li>
                      ))}
                    </ul>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(PokemonDetail)