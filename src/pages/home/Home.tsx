import React from 'react'
import Container, {ContainerItem} from '../../components/container'
import Article from '../../components/article'
import OnlinePlayers from '../../components/online-players'

const Home: React.FC = () => (
    <Container>
        <ContainerItem>
            <Article title="VARÉLIA SAISON 3"/>
        </ContainerItem>
        <ContainerItem>
            <OnlinePlayers onlinePlayers={375} maxPlayers={1000}/>
        </ContainerItem>
    </Container>
)

export default Home