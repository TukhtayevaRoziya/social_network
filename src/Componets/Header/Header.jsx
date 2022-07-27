import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../../TRZ.png'

export const Header = ({isAuth, login, LogoutThunk, userId}) => {
    return (
        <div className="header">
            <div>
                <img src={Icon} alt="" />
            </div>
            <div>
                Ijtimoi Tarmoq
            </div>
            <div>
                {isAuth
                    ? <div> user name : {login} user Id : {userId} -
                        <button onClick={LogoutThunk}>Log out</button></div>
                    : <NavLink to="/login">Login</NavLink>
                }
            </div>
            {/* 29 */}
        </div>
    )
}

