import React from 'react'
import ChildrenImpl from '../../props/ChildrenImpl'

const Card: React.FC<ChildrenImpl> = ({children}) => (
    <div className="card">
        {children}
    </div>
)

export default Card