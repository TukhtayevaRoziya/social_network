import { FC } from 'react'
import { InjectedFormProps } from 'redux-form'

import { LoginFormValuesType } from './Login'
import { createField, Input } from '../../common/formControl/Text'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import moduleName from '../../common/formControl/Input.module.css'

let maxlength300 = maxLengthCreator(300)

export type LoginFormOwnType = {
    captchaUrl: string | null
}

export const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnType> & LoginFormOwnType> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("email", "email", Input, [required, maxlength300],)}
            {createField("password", "password", Input, [required, maxlength300],)}
            {createField("rememberMe", "checkbox", "input", undefined, "Remember Me")}

            {captchaUrl && <img src={captchaUrl} alt="" />}
            {captchaUrl && createField("captcha", "text", "input", undefined)}

            <div>
                {error &&
                    <div className={moduleName.error}>
                        {error}
                    </div>
                }
            </div>
            <button> Input </button>
        </form>
    );
};
