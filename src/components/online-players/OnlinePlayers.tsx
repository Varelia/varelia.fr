import React from 'react'
import Card, {CardBody, CardTitle} from '../card'
import ProgressBar from '../progress-bar'

interface OnlinePlayersImpl {
    onlinePlayers: number
    maxPlayers: number
}

const OnlinePlayers: React.FC<OnlinePlayersImpl> = ({onlinePlayers, maxPlayers}) => {
    const percent = onlinePlayers / maxPlayers * 100

    return <Card>
        <CardTitle title="Rejoignez-nous"/>
        <CardBody style={{margin: "0 -.5rem"}}>
            <p className="online-players">Rejoignez-nous en utilisant l'IP play.varelia.fr</p>
            <ProgressBar percent={percent}>
                {onlinePlayers} joueurs en ligne
            </ProgressBar>
        </CardBody>
    </Card>
}

export default OnlinePlayers