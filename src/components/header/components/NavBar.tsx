import React from 'react'
import MobileMenu from './MobileMenu'

const NavBar: React.FC = () => (
    <nav className="header-navbar">

        <input id="close-mobile-menu" type="checkbox"/>
        <MobileMenu />
    </nav>
)

export default NavBar