import React,{Component} from 'react';
import './header.css';
import logo from './img/logo.png';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <header className="header">
                        <h5 className="header-logo">LogoType</h5>
                        <ul className="menu">
                            <li className="menu-item">Главная</li>
                            <li className="menu-item">Наши номера</li>
                            <li className="menu-item">Наши контакты</li>
                            <li className="menu-item">Обратная связь</li>
                        </ul>
                        <div className="menu-right-panel">
                            <i className="material-icons search">search</i>
                            <i className="material-icons shopping-cart">shopping_cart</i>
                        </div>  
                    
                </header>
            </div>
       
        )
    }
}