import React, {useContext, useEffect} from 'react';
import { IEpisode } from '../interfaces'

import Loader from './Loader'
import { Store } from '../Store'

function Home() {
  const {state, dispatch} = useContext(Store)
  const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'

  const fetchEpisodes = async () => {
    const data = await fetch(url)
    const dataJSON = await data.json()
    dispatch({type: 'Fetch_Data', payload: dataJSON._embedded.episodes})
  }

  const toggleFavourite = (episode: IEpisode): void => {
    const isEpisodeInFav = state.favourites.includes(episode)
    if (isEpisodeInFav) {
      const newFavEpisodes = state.favourites.filter((currentEpisode: IEpisode) => episode.id !== currentEpisode.id)
      dispatch({type: 'Remove_Fav', payload: newFavEpisodes})

    } else {
      dispatch({type: 'Add_Fav', payload: episode})
    }
  }

  const renderList = () => {
    return state.episodes.map((episode: IEpisode) => {
      const { id, image: { medium }, name, summary } = episode
      return (
        <div key={id} className="card">
          <div className="card-name">{name}</div>
          <div className="card-img">
            <img src={medium} alt={name} />
          </div>
          <div className="card-desc">{summary ? summary.replace(/(<p>|<\/p>|<br \/>)/g, '') :'No summary available'}</div>
          <button className="card-button-fav" type="button" onClick={() => {toggleFavourite(episode)}}>{ state.favourites.find((currentEpisode: IEpisode) => id === currentEpisode.id) ? 'Remove' : 'Favourite'}</button>
        </div>
      )
    })
  }

  useEffect(() => {
    if(state.episodes.length === 0) fetchEpisodes()
  })

  return (
    <React.Fragment>
      <div className="title">Rick and Mort episodes</div>
      <div className="favs"> Favourite(s): {state.favourites.length} </div>
      {
        state.episodes.length === 0 ? <Loader/> : (<section className="app-section">
        <div className="container">
          {renderList()}
        </div>
      </section>)
      }
    </React.Fragment>
  )
}

export default Home;
