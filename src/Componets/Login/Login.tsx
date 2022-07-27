import { FC } from 'react';
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'

import { LoginForm, LoginFormOwnType } from './LoginForm';
import { MapDispatchPropsType, MapStatePropsType } from './LoginContainer';

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnType>({ form: "login" })(LoginForm)

export type LoginFormValuesType = {
    email: string
    password: string
    captcha: string
    rememberMe: boolean
}

export const Login: FC<MapStatePropsType & MapDispatchPropsType> = ({ LoginThunk, isAuth, captchaUrl }) => {

    const onSubmit = (FormData: LoginFormValuesType) => {
        LoginThunk(FormData.email, FormData.password, FormData.rememberMe, FormData.captcha)
    }

    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            LOGIN
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}


