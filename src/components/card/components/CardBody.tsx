import React, {CSSProperties} from 'react'
import GenericImpl from '../../../props/GenericImpl'

interface CardBodyImpl extends GenericImpl {
    style?: CSSProperties
    className?: string
}

const CardBody: React.FC<CardBodyImpl> = ({children, style = {}, className = ''}) => (
    <div className={`card--body ${className}`} style={style}>
        {children}
    </div>
)

export default CardBody