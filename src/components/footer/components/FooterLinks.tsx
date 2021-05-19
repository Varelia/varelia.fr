import React from 'react'
import {HttpsTwoTone, LinkTwoTone} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import FooterItem from './FooterItem'

const FooterLinks: React.FC = () => (
    <FooterItem icon={<HttpsTwoTone />} title="Liens utiles" className="footer-item--links">
        <ul>
            <li><Link to=""><LinkTwoTone /> Accueil</Link></li>
            <li><Link to=""><LinkTwoTone /> Vote</Link></li>
            <li><Link to=""><LinkTwoTone /> Discord</Link></li>
            <li><Link to=""><LinkTwoTone /> Boutique</Link></li>
        </ul>
    </FooterItem>
)

export default FooterLinks