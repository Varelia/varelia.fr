import React from 'react'
import {CardTitle} from '../../card'
import {AccountCircleTwoTone, QueryBuilderTwoTone} from '@material-ui/icons'

interface ArticleTitleImpl {
    title: string
}

const ArticleTitle: React.FC<ArticleTitleImpl> = ({title}) => {
    const illustration: JSX.Element = (
        <img
            src="https://cdn.discordapp.com/avatars/285102125959086080/40fc9f371d6076438f5b0d0801710cb3.webp?size=128"
            alt=""/>
    )

    return (
    <CardTitle title={title} illustration={illustration}>
        <p className="article--credentials">
            <small>
                <AccountCircleTwoTone/> Lucas__Lks • <QueryBuilderTwoTone/> 10/06/2021
            </small>
        </p>
    </CardTitle>
    )
}

export default ArticleTitle