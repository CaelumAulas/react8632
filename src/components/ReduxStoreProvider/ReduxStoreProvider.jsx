import React, { createContext } from 'react'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { listaTweetsReducer } from '../../ducks/listaTweets.js'

export const StoreContexto = createContext({store: null})

export function ReduxStoreProvider(props) {
    const store = createStore(
        combineReducers({
            listaTweets: listaTweetsReducer
        }),
        applyMiddleware(
            thunkMiddleware
        )
    )

    return (
        <StoreContexto.Provider value={ {store: store} }>
            { props.children }
        </StoreContexto.Provider>
    )
}