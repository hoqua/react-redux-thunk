import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Feed from '../views/Feed'
import MovieDetails from '../views/MovieDetails'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Feed/>
        </Route>

        <Route exact path="/:movieId">
          <MovieDetails/>
        </Route>

        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}