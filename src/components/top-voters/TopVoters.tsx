import React from 'react'
import Card, {CardBody, CardTitle} from '../card'
import Voter from './components/Voter'

const TopVoters: React.FC = () => (
    <Card>
        <CardTitle title="Meilleurs Voteurs" />
        <CardBody className="voters">
            <Voter nickname="Lucas__Lks" position={1} votes={456} />
            <Voter nickname="Lakorah" position={2} votes={423} />
            <Voter nickname="Pixu_" position={3} votes={348} />
            <Voter nickname="Yxalit" position={4} votes={256} />
            <Voter nickname="TryBack_" position={5} votes={0} />
        </CardBody>
    </Card>
)

export default TopVoters