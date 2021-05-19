import React from 'react'
import GenericImpl from '../../props/GenericImpl'

const Container: React.FC<GenericImpl> = ({children}) => (
    <section className="container">
        {children}
    </section>
)

export default Container