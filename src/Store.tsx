import React, {useReducer} from 'react'
import { IAction, IState } from './interfaces'

const initialState: IState = {
    episodes: [],
    favourites: []
}

export const Store = React.createContext<IState | any>(initialState)

const reducer = (state: IState , action: IAction): IState => {
    switch(action.type) {
        case 'Fetch_Data':
            return { ...state, episodes: action.payload };

        case 'Add_Fav':  
            return {...state, favourites: [...state.favourites, action.payload]};
        
        case 'Remove_Fav':
            return {...state, favourites: action.payload};
        default:
            return state
    }
} 

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Store.Provider value={{state, dispatch}}>
            {props.children}
        </Store.Provider>
    )
}