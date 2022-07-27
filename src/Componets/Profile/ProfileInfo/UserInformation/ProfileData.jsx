import React from 'react'

import { Contacts } from './Contacts'

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}

            <div>
                <b>My fullName </b> : {profile.fullName || "----"}
            </div>

            <div>
                <b>Looking For a Job</b> : {profile.lookingForAJob ? "yes" : "no"}
            </div>

            <div>
                <b>My professional skills</b> : {profile.lookingForAJobDescription || "----"}
            </div>

            <div>
                <b>About Me</b> : {profile.aboutMe || "----"}
            </div>
            
            <div>
                <b>Contacts</b> :
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactsTitle={key}
                        contactsValue={profile.contacts[key]} />
                }) || "----"}</div>

        </div>
    );
};
