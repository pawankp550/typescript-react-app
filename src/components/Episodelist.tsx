import React from 'react'
import { IEpisode } from '../interfaces'

interface IProps {
    episodes: Array<IEpisode>,
    favourites: Array<IEpisode>,
    toggleFavourite: (episode: IEpisode) => void
}

function Episodelist(props: IProps) {
    const { episodes, toggleFavourite, favourites } = props

    const renderList = () => {
        return episodes.map((episode: IEpisode) => {
          const { id, image: { medium }, name, summary } = episode
          return (
            <div key={id} className="card">
              <div className="card-name">{name}</div>
              <div className="card-img">
                <img src={medium} alt={name} />
              </div>
              <div className="card-desc">{summary ? summary.replace(/(<p>|<\/p>|<br \/>)/g, '') :'No summary available'}</div>
              <button className="card-button-fav" type="button" onClick={() => {toggleFavourite(episode)}}>{ favourites.find((currentEpisode: IEpisode) => id === currentEpisode.id) ? 'Remove' : 'Favourite'}</button>
            </div>
          )
        })
      }
    
    return (
        <div className="container">
            {renderList()}
        </div>
    )
}

export default Episodelist
