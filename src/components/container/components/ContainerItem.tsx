import React from 'react'
import GenericImpl from '../../../props/GenericImpl'

const ContainerItem: React.FC<GenericImpl> = ({children}) => (
    <div className="container--item">
        {children}
    </div>
)

export default ContainerItem