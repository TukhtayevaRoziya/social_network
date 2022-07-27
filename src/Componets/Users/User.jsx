import { NavLink } from 'react-router-dom'

import moduleName from './Users.module.css'
import userPhoto from '../../react.jpg'

const User = ({followInProgress, follow, unfollow, user}) => {

    return (
        <div className={moduleName.Users} key={user.id}>
            <span className={moduleName.img_followed_body}>
                <NavLink to={"/profile/" + user.id}>
                    <div className={moduleName.photoBody}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={moduleName.userPhoto} />
                    </div>
                </NavLink>
                <div className={moduleName.followed_body}>
                    {user.followed
                        ? <button disabled={followInProgress.some(id => id === user.id)} className={followInProgress ? moduleName.disabled : ""} onClick={() => { unfollow(user.id) }}>
                            UnFollow</button>
                        : <button disabled={followInProgress.some(id => id === user.id)} className={followInProgress ? moduleName.disabled : ""} onClick={() => { follow(user.id) }}>Follow</button>
                    }
                </div>
            </span>
            <span className={moduleName.user_description}>
                <span className={moduleName.nameVsStatusBody}>
                    <div className={moduleName.name}>{user.name}</div>
                    <div className={moduleName.status}>{user.status}</div>
                </span>
                <span className={moduleName.addres}>
                    <div className={moduleName.city}>{"user.location.city"}</div>
                    <div className={moduleName.country}>{"user.location.country"}</div>
                </span>
            </span>
        </div>
    )
}

export default User
