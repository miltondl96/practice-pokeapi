import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import Navbar from './Navbar'
import Pagination from './Pagination'

class PokemonList extends React.Component {

  state = {
    pokemonList: [],
    page: 1
  }

  componentDidMount(){
    this.setCurrentPage(this.state.page);
  }

  setCurrentPage = (page) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page === 1 ? 0 : page*25}&limit=25`)
    .then(
      (result) => {
        this.setState({
          pokemonList: result.data.results
        })
      }
    )
  }

  setRow = (pokemon, i) => {
    const {page} = this.state
    const image = `https://pokeres.bastionbot.org/images/pokemon/${page===1 ? page+i : (page*25+i)+1}.png`
    return(
      <div className="col-sm d-flex justify-content-around " key={i}>
        <div className="text-white bg-dark mb-3 p-4 hover:shadow rounded hover" style={{"width": "18rem"}} onClick={() => this.props.history.push(`/pokemon/${pokemon.name}/detail`, {pokemon: pokemon.url, image})}>
        <button className="bg-transparent border-0 text-white">
          <img src={image} className="card-img-top" alt="" />
          <div className="card-body">
            <h2 className="card-title text-center text-capitalize">{pokemon.name}</h2>
          </div>
        </button>
        </div>
      </div>
    )
  }
  
  paginate = pageNumber => {this.setState({page: pageNumber}, this.setCurrentPage(pageNumber))}

  render(){
    const { pokemonList } = this.state
    return(
      <>
        <Navbar />
        <div className="container-fluid px-5">
          <div className="row pt-4">
            {
              pokemonList.map((pokemon, i) => (
                this.setRow(pokemon, i)
              ))
            }
          </div>
            <Pagination 
              paginate={this.paginate}
            />
        </div>
      </>
    )
  }
}

export default withRouter(PokemonList)