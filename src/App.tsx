import React from 'react'
import Header from './components/header'
import './style/index.scss'
import './vendor/fontawesome'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

const App: React.FC = () => (
    <BrowserRouter>
        <Header />

        <Switch>
            <Route path="/">

            </Route>
        </Switch>
    </BrowserRouter>
)

export default App
