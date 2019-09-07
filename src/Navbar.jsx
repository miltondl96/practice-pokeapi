import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">POKEAPI</Link>
        <div className="d-flex align-items-center ml-auto">
          <p className="text-white m-0">Created by Milton De León</p>
        </div>
      </nav>
    )
  }
}

export default Navbar

