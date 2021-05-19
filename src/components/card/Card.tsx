import React from 'react'
import GenericImpl from '../../props/GenericImpl'

const Card: React.FC<GenericImpl> = ({className, children}) => (
    <div className={`card ${className}`}>
        {children}
    </div>
)

export default Card