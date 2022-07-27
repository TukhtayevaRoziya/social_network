import { ThunkAction } from 'redux-thunk'

import { getAuthUserData } from './authReduser'
import { AppStateType, InferActionTypes } from './Store'

const initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

const AppReduser = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

type ActionsType = InferActionTypes<typeof actions>

export default AppReduser

const actions = {
    initializedSuccsesAC: () => ({ type: 'INITIALIZED_SUCCESS' })
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccsesAC())
        })
}
