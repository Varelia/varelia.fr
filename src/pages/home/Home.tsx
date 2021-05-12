import React from 'react'
import Container, {ContainerItem} from '../../components/container'
import Card from '../../components/card'
import Article from '../../components/article'

const Home: React.FC = () => (
    <Container>
        <ContainerItem>
            <Article title="VARÉLIA SAISON 3"/>
        </ContainerItem>
        <ContainerItem>
            <Card>
                <></>
            </Card>
        </ContainerItem>
    </Container>
)

export default Home