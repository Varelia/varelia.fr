import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

const MobileMenu: React.FC = () => (
    <div className="mobile-menu">
        <header className="mobile-menu--header">
            <label htmlFor="close-mobile-menu" className="mobile-menu--close">
                <FontAwesomeIcon icon={['fas', 'times']} />
            </label>
            <p>Menu</p>
        </header>
        <section className="mobile-menu--body">
            <ul className="mobile-menu--menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/vote">Vote</Link></li>
                <li><Link to="/discord">Discord</Link></li>
            </ul>
        </section>
        <footer className="mobile-menu--footer">
            <p>&copy; Varelia 2021</p>
        </footer>
    </div>
)

export default MobileMenu