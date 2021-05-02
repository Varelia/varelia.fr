import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header: React.FC = () => (
    <header className="main-header">
        <nav className="mobile-navbar">
            <header className="mobile-navbar--header">
                <label htmlFor="close-mobile-navbar" className="mobile-navbar--close">
                    <FontAwesomeIcon icon={['fas', 'times']} />
                </label>
                <p>Menu</p>
            </header>
            <section className="mobile-navbar--body">
                <ul className="mobile-navbar--menu">
                    <li><a href="/#">Accueil</a></li>
                    <li><a href="/#">Vote</a></li>
                    <li><a href="/#">Boutique</a></li>
                </ul>
            </section>
            <footer className="mobile-navbar--footer">
                <p>&copy; Varelia 2021</p>
            </footer>
        </nav>
    </header>
)

export default Header