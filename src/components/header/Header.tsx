import React from 'react'
import NavBar from './components/NavBar'
import logo from '../../assets/images/varelia.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Header: React.FC = () => (
    <header className="main-header">
        <NavBar />
        <section className="main-header--body">
            <div className="main-header--body--item">
                <FontAwesomeIcon icon={['fas', 'gamepad']} />
                <p>
                    play.varelia.fr
                    <small>
                        <FontAwesomeIcon icon={['fas', 'users']} />
                        458 joueurs connectés
                    </small>
                </p>
            </div>
            <img src={logo} alt="Varelia"/>
            <div className="main-header--body--item">
                <p>
                    varelia.fr/discord
                    <small>
                        En ligne
                        <FontAwesomeIcon icon={['fas', 'circle']} />
                    </small>
                </p>
                <FontAwesomeIcon icon={['fab', 'discord']} />
            </div>
        </section>
    </header>
)

export default Header