import React, { useState } from 'react'

import ProfileDataForm from './UserInformation/ProfileFormData'
import { ProfileData } from './UserInformation/ProfileData'
import { Preloader } from '../../Preloader/Preloader'
import moduleName from './ProfileInfo.module.css'

export const ProfileInfo = ({ profile, savePhoto, isOwner, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) return <Preloader />

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (FormData) => {
        saveProfile(FormData)
    }
    return (
        <div className={moduleName.ProfileInfo}>

            <img src={profile.photos.large} alt="" />
            {isOwner && <input onChange={onMainPhotoSelected} type={"file"} />}
            <br />
            {editMode 
            ? <ProfileDataForm initialValues={profile} profile={profile}  onSubmit={onSubmit}/>
            : <ProfileData profile={profile} goToEditMode={()=> setEditMode(true) } isOwner={isOwner}/> 
}
        </div>
    )
}
