import React from 'react'
import MobileMenu from './MobileMenu'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => (
    <nav className="header-navbar">
        <div className="header-navbar--menu">
            <ul>
                <li className="header-navbar--menu--mobile">
                    <label htmlFor="close-mobile-menu">
                        <FontAwesomeIcon icon={['fas', 'bars']} /> Accueil
                    </label>
                </li>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/vote">Vote</Link></li>
                <li><Link to="/discord">Discord</Link></li>
            </ul>
            <a className="header-navbar--menu--shop-btn" href="/#">Boutique</a>
        </div>

        <input id="close-mobile-menu" type="checkbox" hidden/>
        <MobileMenu />
    </nav>
)

export default NavBar