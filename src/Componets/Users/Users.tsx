import { FC } from 'react'

import { UsersType } from '../../types/types'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    users: Array<UsersType>
    currentPage: number
    onPageChange: (change: any) => void
    followInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: FC<PropsType> = ({ totalUsersCount, pageSize, users, currentPage, unfollow, follow, onPageChange, followInProgress }) => {
    return (
        <>
            {/* <h1 className={moduleName.title}>Users</h1> */}
            {/* <Paginator totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange} /> */}
            {users.map(user => <div>{user.name}</div>)}
            {/*   //  unfollow={unfollow} user={user}/>
                //  <div className={moduleName.Users} key={user.id}>
                //     <span className={moduleName.img_followed_body}>
                //         <NavLink to={"/profile/" + user.id}>
                //             <div className={moduleName.photoBody}>
                //                 <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={moduleName.userPhoto} />
                //             </div>
                //         </NavLink>
                //         <div className={moduleName.followed_body}>
                //             {user.followed
                //                 ? <button disabled={followInProgress.some(id => id === user.id)} className={followInProgress ? moduleName.disabled : ""} onClick={() => { unfollow(user.id) } }>
                //                     UnFollow</button>
                //                 : <button disabled={followInProgress.some(id => id === user.id)} className={followInProgress ? moduleName.disabled : ""} onClick={() => { follow(user.id) } }>Follow</button>}
                //         </div>
                //     </span>
                //     <span className={moduleName.user_description}>
                //         <span className={moduleName.nameVsStatusBody}>
                //             <div className={moduleName.name}>{user.name}</div>
                //             <div className={moduleName.status}>{user.status}</div>
                //         </span>
                //         <span className={moduleName.addres}>
                //             <div className={moduleName.city}>{"user.location.city"}</div>
                //             <div className={moduleName.country}>{"user.location.country"}</div>
                //         </span>
                //     </span>
                // </div>
               // )
           } */}
        </>
    )
}

// Life is like riding a bicycle. To keep your balance you must keep moving