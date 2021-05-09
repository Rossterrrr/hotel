import React,{Component} from 'react';
import './app.css';
import Header from '../header/header';
import Demo from '../demo/demo';
import Services from '../services/services';
import Popular from '../popular/popular';
import Footer from '../footer/footer';
import ServicesData from '../../services.json';
import DB from '../../db.json';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

export default class MainPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <React.Fragment>
                    <Header/>
                    <Demo title={'Наши аппартаменты'} coast={2000} btnName={'Аппартаменты'} demoUrl={'/img/demo2.jpg'}/>   
                    <Services services={JSON.parse(JSON.stringify(ServicesData))}/>
                    <Popular data={JSON.parse(JSON.stringify(DB))}/>
                    <Footer/>
                </React.Fragment>
        )
    }
}