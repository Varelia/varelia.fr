import React, {useEffect, useState} from 'react'
import Card, {CardBody, CardTitle} from '../card'
import Voter from './components/Voter'
import {default as VoterModel} from '../../adapters/api/entity/Voter'
import {fetchVotes} from '../../adapters/api'
import FakeVoter from './components/FakeVoter'
import {ListVoteResponse} from '../../adapters/api/response'

const TopVoters: React.FC = () => {
    const [voters, setVoters] = useState<VoterModel[]>([])

    useEffect(() => {
        fetchVotes<ListVoteResponse>(5).then(response => setVoters(response.data.body))
    }, [])

    return <Card>
        <CardTitle title="Meilleurs Voteurs"/>
        <CardBody className="voters">
            {
                !!voters.length ?
                    voters.map(voter => (
                        <Voter nickname={voter.nickname} votes={voter.votes} position={voter.id} />
                    )) :
                    new Array(5).fill(<FakeVoter />)
            }
        </CardBody>
    </Card>
}

export default TopVoters