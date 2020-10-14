import React, {useContext} from 'react';
import Routes from './Routes'

import { Store } from './Store'
import {
  Link,
  BrowserRouter as Router,
} from "react-router-dom"

function App() {
  const { state: { favourites } } = useContext(Store)
  return (
    <Router>
      <div className="title">Rick and Mort episodes</div>
      <div className="favs"> Favourite(s): {favourites.length} </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favourites">Fav</Link>
      </div>  
      <Routes/>
    </Router>
  )
}

export default App;
