import React from 'react'
import Container, {ContainerItem} from '../../components/container'
import OnlinePlayers from '../../components/online-players'
import TopVoters from '../../components/top-voters'
import { default as VoteComponent } from '../../components/vote'

const Vote: React.FC = () => (
    <Container>
        <ContainerItem>
            <VoteComponent />
        </ContainerItem>
        <ContainerItem>
            <OnlinePlayers onlinePlayers={375} maxPlayers={1000}/>
            <TopVoters />
        </ContainerItem>
    </Container>
)

export default Vote