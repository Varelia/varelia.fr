import React from 'react'
import Card, {CardBody, CardTitle} from '../card'

interface DiscordWidgetImpl {
    id: string
    theme?: string
}

const DiscordWidget: React.FC<DiscordWidgetImpl> = ({id, theme = "dark"}) => (
    <Card>
        <CardTitle title="Discord" />
        <CardBody>
            <iframe src={`https://discord.com/widget?id=${id}&theme=${theme}`} height="500"
                    allowTransparency={true} frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
        </CardBody>
    </Card>
)

export default DiscordWidget