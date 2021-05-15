import React from 'react'

interface CardTitleImpl {
    title: string
    children?: JSX.Element
    illustration? : JSX.Element
}

const CardTitle: React.FC<CardTitleImpl> = ({title, children, illustration}) => (
    <header className="card--title">
        {illustration &&
        <div className="card--title--item">
            {illustration}
        </div>
        }
        <div className="card--title--item">
            <h1>{title}</h1>
            {children}
        </div>
    </header>
)

export default CardTitle