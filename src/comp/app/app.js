import React,{Component} from 'react';
import './app.css';
import MainPage from './main-page';
import AppartsPage from './apparts-page';
import {BrowserRouter as Router,Route} from 'react-router-dom';

export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <Route exact path='/' component={MainPage} />
                <Route path='/apparts' component={AppartsPage} />
            </Router>
        )
    }
}