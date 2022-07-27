import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'

import { ResultCodeForCaptchaTypeEnum, ResultCodesTypeEnum } from '../api/Api'
import { AppStateType, InferActionTypes } from './Store'
import { securityAPI } from '../api/securityAPI'
import { authApi } from '../api/authApi'

const initialState = {
    userId: null as any,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

type InitialStateType = typeof initialState

const AuthReduser = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA':
        case 'GET_CAPCHA_URL':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

type ActionsType = InferActionTypes<typeof actions>

const actions = {
    setAuthUserDataAc: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'SET_AUTH_USER_DATA',
        payload: { userId, login, email, isAuth }
    }),
    getCaptchaUrlAC: (captchaUrl: string) => ({ type: 'GET_CAPCHA_URL', payload: { captchaUrl } })
}

export default AuthReduser

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const data = await authApi.me()
    if (data.resultCode === ResultCodesTypeEnum.Success) {
        let { id, login, email } = data.data
        dispatch(actions.setAuthUserDataAc(id, login, email, true))
    } else {
        dispatch(LogoutThunk())
    }
}

export const LoginThunk = (email: string, password: string, rememberMe: boolean, captcha: any): ThunkType => async (dispatch) => {
    const data = await authApi.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesTypeEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaTypeEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrlThunk())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error!"
        // @ts-ignore
        dispatch(stopSubmit("login", { _error: message }))
    }
}

export const LogoutThunk = (): ThunkType => async (dispatch) => {
    const data = await authApi.logout()
    if (data.resultCode === ResultCodesTypeEnum.Success) {
        dispatch(actions.setAuthUserDataAc(null, null, null, false))
    }
}

export const getCaptchaUrlThunk = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlAC(captchaUrl))
}
