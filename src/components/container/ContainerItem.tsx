import React from 'react'
import ChildrenPropsImpl from '../../props/ChildrenPropsImpl'

const ContainerItem: React.FC<ChildrenPropsImpl> = ({children}) => (
    <div className="container--item">
        {children}
    </div>
)

export default ContainerItem