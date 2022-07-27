import { ThunkAction } from 'redux-thunk'
import { stopSubmit } from 'redux-form'

import { PhotosType, PostDataType, ProfileType } from '../types/types'
import { AppStateType, InferActionTypes } from './Store'
import { ResultCodesTypeEnum } from '../api/Api'
import { profileApi } from '../api/profileApi'

const initialState = {
    postData: [
        { id: 1, post: "bla-bla", likesCount: "👍 11" },
        { id: 2, post: "bla-bla", likesCount: "👍 11" },
        { id: 3, post: "bla-bla", likesCount: "👍 11" },
        { id: 4, post: "bla-bla", likesCount: "👍 11" },
    ] as Array<PostDataType>,
    profile: null as ProfileType | null,
    status: ""
}

export type InitialStateType = typeof initialState

const ProfileReduser = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            const stateCopy = { ...state }
            const dataCopy = stateCopy.postData = [...state.postData]
            const newpost = {
                id: dataCopy.length + 1,
                post: action.newPostText,
                likesCount: 11,
            }
            return {
                ...state,
                postData: [...state.postData, newpost]
            }

        case 'SET_USER_PROFILE':
            return { ...state, profile: action.profile }

        case 'SET_STATUS':
            return { ...state, status: action.status }

        case 'DELETE_POST':
            return { ...state, postData: state.postData.filter((p: { id: number; }) => p.id !== action.postId) }

        case 'SAVE_PHOTO_SUCCESS':
            return { ...state, profile: { ...state.profile, photos: action.photos } }

        default:
            return state
    }
}

type ActionsType = InferActionTypes<typeof actions>

export default ProfileReduser

export const actions = {
    SendPostAC: (newPostText: string) => ({ type: 'ADD_POST', newPostText } as const),

    SetUserProfileAC: (profile: ProfileType) => ({
        type: 'SET_USER_PROFILE',
        profile: profile
    } as const),

    SetStatusAC: (status: string) => ({ type: 'SET_STATUS', status } as const),

    deletePostAC: (postId: number) => ({ type: 'DELETE_POST', postId } as const),

    SavePhotoAC: (photos: PhotosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

type GetStateType = () => AppStateType

export const getProfileData = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileApi.getProfile(userId)
    dispatch(actions.SetUserProfileAC(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileApi.getStatus(userId)
    dispatch(actions.SetStatusAC(data))
}

export const upDateStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileApi.upDateStatus(status)
    if (data.resultCode === ResultCodesTypeEnum.Success) {
        dispatch(actions.SetStatusAC(status))
    }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    const data = await profileApi.savePhoto(file)
    if (data.resultCode === ResultCodesTypeEnum.Success) {
        dispatch(actions.SavePhotoAC(data.data.photos))
    }
}

export const saveProfile = (file: any): ThunkType => async (dispatch, getState: GetStateType) => {
    const userId = getState().Auth.userId
    const data = await profileApi.saveProfile(file)
    if (data.resultCode === ResultCodesTypeEnum.Success) {
        dispatch(getProfileData(userId))
    } else {
        // @ts-ignore
        dispatch(stopSubmit("edit_profile", { _error: data.messages[0] }))
    }
}

