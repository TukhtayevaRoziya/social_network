import { connect } from 'react-redux'

import { LoginThunk, LogoutThunk } from '../../Redux/authReduser'
import { getCaptchaUrlThunk } from '../../Redux/authReduser'
import { AppStateType } from '../../Redux/Store'
import { Login } from './Login'

export type MapStatePropsType = {
        captchaUrl: string | null
        isAuth: boolean
}

export type MapDispatchPropsType = {
        LoginThunk: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
        return {
                captchaUrl: state.Auth.captchaUrl,
                isAuth: state.Auth.isAuth
        }
}

export default connect(mapStateToProps, {  LoginThunk, LogoutThunk, getCaptchaUrlThunk })(Login)