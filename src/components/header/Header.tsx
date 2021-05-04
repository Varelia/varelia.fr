import React from 'react'
import NavBar from './components/NavBar'
import logo from '../../assets/images/varelia.png'

const Header: React.FC = () => (
    <header className="main-header">
        <NavBar />
        <section className="main-header--body">
            <img src={logo} alt="Varelia"/>
        </section>
    </header>
)

export default Header