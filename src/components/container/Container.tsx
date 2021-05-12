import React from 'react'
import ChildrenPropsImpl from '../../props/ChildrenPropsImpl'

const Container: React.FC<ChildrenPropsImpl> = ({children}) => (
    <section className="container">
        {children}
    </section>
)

export default Container