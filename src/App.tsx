import React from 'react'
import Header from './components/header'
import './style/index.scss'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/home'

const App: React.FC = () => (
    <BrowserRouter>
        <Header />

        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App
