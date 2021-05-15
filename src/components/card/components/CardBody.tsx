import React, {CSSProperties} from 'react'
import ChildrenImpl from '../../../props/ChildrenImpl'

interface CardBodyImpl extends ChildrenImpl {
    style?: CSSProperties
}

const CardBody: React.FC<CardBodyImpl> = ({children, style = {}}) => (
    <div className="card--body" style={style}>
        {children}
    </div>
)

export default CardBody