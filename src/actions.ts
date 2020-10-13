import { IEpisode } from './interfaces'

export const fetchEpisodesAction = async (dispatch: any, url: string) => {
    const data = await fetch(url)
    const dataJSON = await data.json()
    dispatch({type: 'Fetch_Data', payload: dataJSON._embedded.episodes})
  }

export const toggleFavouriteAction = (dispatch: any, episode: IEpisode, state: any): void => {
    const isEpisodeInFav = state.favourites.includes(episode)
    if (isEpisodeInFav) {
      const newFavEpisodes = state.favourites.filter((currentEpisode: IEpisode) => episode.id !== currentEpisode.id)
      dispatch({type: 'Remove_Fav', payload: newFavEpisodes})

    } else {
      dispatch({type: 'Add_Fav', payload: episode})
    }
  }