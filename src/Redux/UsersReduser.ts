import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'redux'

import { updateObjectInArray } from '../utils/object-helpers'
import { AppStateType, InferActionTypes } from './Store'
import { ResultCodesTypeEnum } from '../api/Api'
import { usersAPI } from '../api/usersAPI'
import { UsersType } from '../types/types'

const initialState = {
    users: [] as Array<UsersType> | void,
    pageSize: 100 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followInProgress: [] as Array<number>,
}

type InitialStateType = typeof initialState

const UsersReduser = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }

        case 'SET_USERS':
            return {
                ...state, users: [...action.users]
            }

        case 'SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage }
        }

        case 'SET_TOTAL_USERS_COUNT': {
            return { ...state, totalUsersCount: action.count }
        }

        case 'TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }

        case 'TOGGLE_IS_FOLLOW_IN_PROGRESS': {
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter((id: any) => id !== action.userId)
            }
        }

        default:
            return state
    }
}

export default UsersReduser


export const actions = {
    followAC: (userId: number) => ({ type: 'FOLLOW', userId } as const),

    unfollowAC: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),

    setUsersAC: (users: any) => ({ type: 'SET_USERS', users } as const),

    setCurrentPageAC: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),

    setTotalUsersCountAC: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),

    toggleIsFetchingAC: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),

    followInProgressAC: (followInProgress: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOW_IN_PROGRESS', isFetching: followInProgress, userId } as const)
}

type ActionsType = InferActionTypes<typeof actions>

type DispatchType = Dispatch<ActionsType>


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetchingAC(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.toggleIsFetchingAC(false))
    dispatch(actions.setUsersAC(data.items))
    dispatch(actions.setTotalUsersCountAC(data.totalCount))
}

const _followUnFollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.followInProgressAC(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === ResultCodesTypeEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.followInProgressAC(false, userId))
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUnFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowAC)
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followAC)
}