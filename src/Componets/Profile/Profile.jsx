import MyPostContainer from './MyPost/MyPostContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

export const Profile = ({ profile, status, upDateStatus, isOwner, savePhoto, saveProfile }) => {
    return (
        <div className="Profile">
            <ProfileInfo saveProfile={saveProfile} savePhoto={savePhoto} isOwner={isOwner}
             profile={profile} status={status} upDateStatus={upDateStatus} />
            <ProfileStatus status={status} upDateStatus={upDateStatus} />
            <MyPostContainer />
        </div>
    )
}

