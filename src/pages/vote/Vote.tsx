import React from 'react'
import Container, {ContainerItem} from '../../components/container'
import OnlinePlayers from '../../components/online-players'
import {default as VoteComponent} from '../../components/vote'
import DiscordWidget from '../../components/discord-widget'

const Vote: React.FC = () => (
    <Container>
        <ContainerItem>
            <VoteComponent />
        </ContainerItem>
        <ContainerItem>
            <OnlinePlayers onlinePlayers={375} maxPlayers={1000}/>
            <DiscordWidget id="835439488369033266" />
        </ContainerItem>
    </Container>
)

export default Vote