import React from 'react'

interface CardTitleImpl {
    title: string
}

const CardTitle: React.FC<CardTitleImpl> = ({title}) => (
    <header className="card--title">
        <h1>{title}</h1>
    </header>
)

export default CardTitle