import React, {CSSProperties} from 'react'
import ChildrenImpl from '../../../props/ChildrenImpl'

interface CardBodyImpl extends ChildrenImpl {
    style?: CSSProperties
    className?: string
}

const CardBody: React.FC<CardBodyImpl> = ({children, style = {}, className = ''}) => (
    <div className={`card--body ${className}`} style={style}>
        {children}
    </div>
)

export default CardBody