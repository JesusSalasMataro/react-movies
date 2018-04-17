import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import './App.css';

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/detail/:id" component={MovieDetail} />
                </Switch>
            </div>
        )
    }
}


