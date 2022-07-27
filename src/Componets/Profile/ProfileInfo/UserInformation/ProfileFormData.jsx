import React from 'react'
import { createField, Input } from '../../../../common/formControl/Text'
import { reduxForm } from 'redux-form';
import moduleName from './ProfileFormDada.module.css'

const ProfileDataForm = ({ profile, handleSubmit , error}) => {

    return (
        <form onSubmit={handleSubmit}>
             <div>
                {error &&
                    <div className={moduleName.error}>
                        {error}
                    </div>}
            </div>
            <button >save</button>
            <div><b>My fullName </b>: {createField("fullName", "text", Input, null, { placeholder: "FULL NAME" })}</div>


            <div><b>Looking For a Job</b>: {createField("lookingForAJob", "checkbox", Input, null, { placeholder: "Looking For a Job" })}</div>
            <div><b>My professional skills</b>: {createField("lookingForAJobDescription", "text", Input, null, { placeholder: "My professional" })}</div>
            <div><b>About Me</b>: {createField("aboutMe", "text", Input, null, { placeholder: "About Me" })}</div>

            <div>
                <b>Contacts</b> :
                {Object.keys(profile.contacts)
                    .map(key => {
                        return <div 
                        className={moduleName.Contacts} 
                        key={key}>
                            <div>
                                <b>{key}</b>:
                                {createField("contacts." + key, 
                                "text", Input, null,
                                    { placeholder: key })}
                            </div>
                        </div>
                    })
                }
            </div>
        </form>
    )
}

const ProfileReduxFormData = reduxForm({ form: "edit_profile" })(ProfileDataForm)


export default ProfileReduxFormData
