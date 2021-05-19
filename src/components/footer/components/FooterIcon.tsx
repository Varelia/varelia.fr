import React from 'react'
import logo from '../../../assets/images/logo.png'
import FooterItem from './FooterItem'

const FooterIcon: React.FC = () => (
    <FooterItem className="footer-item--logo">
        <img className="main-footer--logo" src={logo} alt="Varelia"/>
    </FooterItem>
)

export default FooterIcon