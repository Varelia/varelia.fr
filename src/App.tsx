import React from 'react'
import Header from './components/header'
import './style/index.scss'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/home'
import Vote from './pages/vote'
import Footer from './components/footer'

const App: React.FC = () => (
    <BrowserRouter>
        <Header />

        <Switch>
            <Route path="/vote">
                <Vote />
            </Route>
            <Route path="/discord" component={() => {
                window.location.href = "https://discord.gg/eMGYg3WvVR"
                return null
            }} />
            <Route path="/">
                <Home />
            </Route>
        </Switch>

        <Footer />
    </BrowserRouter>
)

export default App
