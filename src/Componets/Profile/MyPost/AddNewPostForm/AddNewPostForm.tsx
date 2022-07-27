import React, {FC} from 'react'

import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { createField, Input } from '../../../../common/formControl/Text'
import moduleName from './AddNewPostForm.module.css'
import { LoginFormValuesType } from '../../../Login/Login';
import { InjectedFormProps } from 'redux-form';

let maxlength200=maxLengthCreator(200)

export const AddNewPostForm:FC<InjectedFormProps<LoginFormValuesType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
            {createField("newPostData", null, Input,[required, maxlength200], {placeholder:"Post"},null )}
            <button className={moduleName.my_post_button}>Send</button>
        </form>
    )
}
