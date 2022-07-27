import React from 'react'
import { Field } from 'redux-form'

import { maxLengthCreator } from './../../utils/validators/validators'
import { required } from './../../utils/validators/validators'
import { Input } from './../../common/formControl/Text'
import moduleName from './Dialogs.module.css'

let maxLength20 = maxLengthCreator(20)

export const DialogsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field validate={[required, maxLength20]} name={"newMessageData"} component={Input} placeholder={"your new..."} className={moduleName.inp} />
                <button className={moduleName.btn}>Send</button>
            </div>
        </form>
    );
};
