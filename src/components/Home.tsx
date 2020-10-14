import React, {Suspense, useContext, useEffect} from 'react';
import { IEpisode } from '../interfaces'
import { fetchEpisodesAction, toggleFavouriteAction } from '../actions'

import Loader from './Loader'
import { Store } from '../Store'

const Episodelist = React.lazy(() => import('./Episodelist'))

function Home() {
  const { state, dispatch } = useContext(Store)
  const { favourites, episodes } = state
  const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'

  useEffect(() => {
    if(episodes.length === 0) fetchEpisodesAction(dispatch, url)
  })

  return (
    <React.Fragment>
      {
        episodes.length === 0 ? <Loader/> : (
        <section className="app-section">
          <Suspense fallback={<Loader/>}>
            <Episodelist favourites={favourites} episodes={episodes} toggleFavourite={(episode: IEpisode) => toggleFavouriteAction(dispatch, episode, state)}/>
          </Suspense>
        </section>
        )
      }
    </React.Fragment>
  )
}

export default Home;
