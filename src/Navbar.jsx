import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">POKEAPI</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/created_by">Created by</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar

