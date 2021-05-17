import React from 'react'
import {HowToVoteTwoTone, PersonOutlineTwoTone} from '@material-ui/icons'

interface VoterImpl {
    nickname: string
    votes: number
    position: number
}

const Voter: React.FC<VoterImpl> = ({nickname, votes, position}) => (
    <div className="voter">
        <img src={`https://minotar.net/avatar/${nickname}/50.png`} alt={`Skin de ${nickname}`}/>
        <div className="voter--body">
            <p><PersonOutlineTwoTone /> {position}. {nickname}</p>
            <p><HowToVoteTwoTone /> {votes} vote{votes > 1 && 's' }</p>
        </div>
    </div>
)

export default Voter