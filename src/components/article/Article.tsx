import React from 'react'
import Card from '../card'
import ArticleTitle from './components/ArticleTitle'
import {ForwardTwoTone} from '@material-ui/icons'

interface ArticleImpl {
    title: string
}

const Article: React.FC<ArticleImpl> = ({title}) => (
    <Card>
        <ArticleTitle title={title} />
        <section className="article--body">
            <p>Bonjour à tous, nous sommes d'ores et déjà entrain de travailler sur la saison 3 de VARÉLIA !</p>
            <p>La saison RÉSURRECTION aura pour but d'apporter du contenu supplémentaire (LES POUVOIRS) afin de dynamiser et diversifier très légèrement le gameplay de vos parties.</p>
            <p>Ce post à donc pour but d'avoir vos retours en amont, dites-nous en commentaire ce que vous pensez de cette idée, toute critique constructive est la bienvenue afin de nous aider à améliorer VARÉLIA.</p>
        </section>
        <footer className="article--footer">
            <a href="/#"><ForwardTwoTone />&nbsp;En savoir plus</a>
        </footer>
    </Card>
)

export default Article