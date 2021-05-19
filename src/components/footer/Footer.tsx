import React from 'react'
import Card from '../card'
import FooterDescription from './components/FooterDescription'
import FooterLinks from './components/FooterLinks'
import FooterIcon from './components/FooterIcon'

const Footer: React.FC = () => (
    <footer className="main-footer">
        <Card>
            <div className="main-footer--wrapper">
                <FooterDescription />
                <FooterLinks />
                <FooterIcon />
            </div>
            <div className="main-footer--copyright">
                <p>&copy; Varelia 2021 - Par Lucas</p>
            </div>
        </Card>
    </footer>
)

export default Footer