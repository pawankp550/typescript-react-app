export interface IState {
    episodes: Array<IEpisode>,
    favourites: Array<IEpisode>
}

export interface IAction {
    type: string,
    payload?: any
}

export interface IEpisode {
    id: number,
    name: string,
    image: {medium: string, original: string},
    season: number,
    number: number,
    type: string,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    summary: string,
    links: { self: { href: string } }
  }
