import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indo, Provinsi } from './pages'


const App = () => {
    return (
        <center>
        <Router>
            <div>
            <h1>Covid Tracker</h1>
            <p><b>Aplikasi Sederhana Untuk Tracking Covid-19</b></p>
                <nav>  
                    
                        <tr>
                            <Link to="/Global">
                                Global 
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Indo">
                                   Indonesia
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Provinsi">
                                       Provinsi
                            </Link>
                        </tr>
                   
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
        </center>
    )
}

export default App