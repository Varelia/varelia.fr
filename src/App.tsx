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

const App: React.FC = () => (
    <BrowserRouter>
        <Header />

        <Switch>
            <Route path="/vote">
                <Vote />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App
