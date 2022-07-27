import { NavLink } from 'react-router-dom'
import { reduxForm } from 'redux-form'

import moduleName from './Dialogs.module.css'
import { DialogsForm } from './DialogsForm'

const DialogsReduxForm = reduxForm({ form: " dialog " })(DialogsForm)

export const Dialogs = ({SendMessage, dialog}) => {
    let onAddPost = (values) => {
        SendMessage(values.newMessageData)
    }

    let mapUsers = dialog.Users.map(u => <li key={u.id} className={moduleName.Name}>
        <NavLink activeClassName={moduleName.activeUser} to={"/dialogs/" + u.url} >{u.name}</NavLink>
    </li>)

    let mapMessage = dialog.Messages.map(m => <div key={m.id} className={moduleName.Message}>
        <h1>{m.message}</h1>
    </div>)

    return (
        <>
            <h1 className={moduleName.title}>DIALOGS</h1>
            <div className={moduleName.Dialogs}>
                <div className={moduleName.NameItems}>
                    {mapUsers}
                </div>
                <div className={moduleName.MessageItems}>
                    {mapMessage}
                </div>
            </div>
            <DialogsReduxForm onSubmit={onAddPost} />
        </>

    )
}