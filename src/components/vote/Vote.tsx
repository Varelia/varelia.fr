import React from 'react'
import Card, {CardBody, CardTitle} from '../card'
import Leaderboard from './components/Leaderboard'

const Vote: React.FC = () => (
    <>
        <Card>
            <CardTitle title="Votez pour nous !" />
            <CardBody>
                <></>
            </CardBody>
        </Card>
        <Leaderboard />
    </>
)

export default Vote