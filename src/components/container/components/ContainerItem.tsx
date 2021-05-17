import React from 'react'
import ChildrenImpl from '../../../props/ChildrenImpl'

const ContainerItem: React.FC<ChildrenImpl> = ({children}) => (
    <div className="container--item">
        {children}
    </div>
)

export default ContainerItem