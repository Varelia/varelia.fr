import React from 'react'
import {InfoTwoTone} from '@material-ui/icons'
import FooterItem from './FooterItem'

const FooterDescription: React.FC = () => (
    <FooterItem icon={<InfoTwoTone />} title="Varelia">
        <p>
            Varelia est un serveur PvP Faction en 1.8.<br />
            Varelia vous propose plusieurs fonctionnalités qui sauront vous aider dans votre progression sur le serveur.
        </p>
    </FooterItem>
)

export default FooterDescription