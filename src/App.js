import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indo, Provinsi } from './pages'


function App() {
    return (
        <Router>
            <div>
            <h1> Covid Tracker</h1>
                <nav>  
                    <ul>
                        <li>
                            <Link to="/Global">
                                Global
                            </Link>
                        </li>
                        <li>
                            <Link to="/Indo">
                                   Indonesia
                            </Link>
                        </li>
                        <li>
                            <Link to="/Provinsi">
                                       Provinsi
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/Provinsi">
                    <Provinsi />
                </Route>
                <Route path="/Indo">
                    <Indo />
                </Route>
                <Route path="/Global">
                    <Global />
                </Route>
            </Switch>
        </Router>
        
    )
}

export default App