import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'
import './style.css'

class App extends React.Component {
  render() {
    return(
      <Router>
        <Route exact path="/" component={PokemonList}/>
        <Route exact path="/pokemon/:id/detail" component={PokemonDetail}/>
      </Router>
    );
  }
}

export default App