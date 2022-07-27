import React from 'react'
import { NavLink } from 'react-router-dom'

import moduleName from './Navbar.module.css'

export const Navbar = ({ Navbar }) => {
    const NavbarMap = Navbar.map(n =>
        <div key={n.id}>
            <NavLink activeClassName={moduleName.active} to={"/" + n.path}>{n.name}</NavLink>
        </div>
    )
    return (
        <div className={moduleName.Navbar}>
            {NavbarMap}
        </div>

    )
}
