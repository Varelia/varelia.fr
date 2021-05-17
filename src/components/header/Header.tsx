import React from 'react'
import NavBar from './components/NavBar'
import logo from '../../assets/images/varelia.png'

const Header: React.FC = () => (
    <header className="main-header">
        <NavBar />
        <section className="main-header--body">
            <div className="main-header--item">

            </div>
            <div className="main-header--item">
                <img className="logo" src={logo} alt="Varelia"/>
            </div>
        </section>
    </header>
)

export default Header