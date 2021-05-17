import React from 'react'
import Card, {CardBody, CardTitle} from '../../card'
import crown from '../../../assets/images/crown.svg'

const Leaderboard: React.FC = () => (
    <Card>
        <CardTitle title="Classement des voteurs" />
        <CardBody>
            <div className="leaderboard">
                <div className="leaderboard--top-bar">
                    <div className="leaderboard--top-bar--item">
                        <p className="id">2</p>
                        <img src={`https://minotar.net/avatar/Lakorah/50.png`} alt={`Skin de Lakorah`}/>
                        <p className="nickname">Lakorah</p>
                        <p className="votes">358</p>
                    </div>
                    <div className="leaderboard--top-bar--item">
                        <p className="id">
                            <img src={crown} alt="Couronne"/>
                            1
                        </p>
                        <img src={`https://minotar.net/avatar/Lucas__Lks/50.png`} alt={`Skin de Lucas__Lks`}/>
                        <p className="nickname">Lucas__Lks</p>
                        <p className="votes">459</p>
                    </div>
                    <div className="leaderboard--top-bar--item">
                        <p className="id">3</p>
                        <img src={`https://minotar.net/avatar/Pixu_/50.png`} alt={`Skin de Pixu_`}/>
                        <p className="nickname">Pixu_</p>
                        <p className="votes">256</p>
                    </div>
                </div>
            </div>
            <div className="wrapped-paragraph">
                <p>
                    Chaque mois des récompenses sont données en fonction de votre placement. <br />
                    Soyez premier et gagnez jusqu'à XXXXX. <br />
                    <br />
                    Pour plus d'information, rendez-vous sur notre serveur discord.
                </p>
            </div>
        </CardBody>
    </Card>
)

export default Leaderboard