import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home'
import Favourites from './components/Favourites'

const routes = () => {
    return (
    <Switch>
        <Route path="/favourites" exact>
            <Favourites />
        </Route>
        <Route path="/" exact>
            <Home />
        </Route>
    </Switch>
    )
}

export default routes