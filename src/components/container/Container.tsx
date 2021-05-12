import React from 'react'
import ChildrenImpl from '../../props/ChildrenImpl'

const Container: React.FC<ChildrenImpl> = ({children}) => (
    <section className="container">
        {children}
    </section>
)

export default Container