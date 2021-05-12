import React from 'react'
import ChildrenPropsImpl from '../../props/ChildrenPropsImpl'

const Card: React.FC<ChildrenPropsImpl> = ({children}) => (
    <div className="card">
        {children}
    </div>
)

export default Card